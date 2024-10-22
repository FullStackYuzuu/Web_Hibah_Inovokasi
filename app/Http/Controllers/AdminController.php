<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Models\Product;
use App\Http\Resources\ProductResource;
use App\Models\Sales;
use App\Http\Resources\SalesResource;
use App\Models\ProductImage;
use App\Models\Settings;
use Carbon\Carbon;
use Illuminate\Support\Str;
use DB;

class AdminController extends Controller
{
    public function login(Request $request)
    {
        $gUser = Socialite::driver('google')->user();

        $user = User::where('email', $gUser->getEmail())->first();

        if ($user) {
            Auth::login($user);

            return redirect('/admin');
        } else {
            // Redirect with an error message passed to Inertia
            // return Inertia::location('/admin-login')->with('error', 'No Email Registered');
            return redirect('/admin-login')->with('error', 'Email Tidak Terdaftar.');
        }
    }

    public function logout(Request $request)
    {
        auth('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }

    public function index()
    {
        // Menghitung total penjualan bulan ini
        $totalPenjualanBulanIni = Sales::whereMonth('sale_time', Carbon::now()->month)
            ->sum('total_price');

        // Mengambil produk yang paling banyak terjual bulan ini
        $produkTerjualPalingBanyak = Sales::with('product')
            ->select('product_id', Sales::raw('SUM(amount) as total_amount'))
            ->whereMonth('sale_time', Carbon::now()->month)
            ->groupBy('product_id')
            ->orderByDesc('total_amount')
            ->first();

        $produkTerjualPalingBanyakNama = $produkTerjualPalingBanyak ? $produkTerjualPalingBanyak->product->name : 'Tidak ada penjualan';

        // Menghitung total penjualan sepanjang masa
        $totalPenjualanSepanjangMasa = Sales::sum('total_price');

        // Data statistik yang akan dikirim ke frontend
        $statsData = [
            ['title' => 'Total Penjualan Bulan Ini', 'value' => 'Rp ' . number_format($totalPenjualanBulanIni, 0, ',', '.')],
            ['title' => 'Produk Terjual Paling Banyak Bulan Ini', 'value' => $produkTerjualPalingBanyakNama],
            ['title' => 'Total Penjualan Sepanjang Masa', 'value' => 'Rp ' . number_format($totalPenjualanSepanjangMasa, 0, ',', '.')],
        ];

        // Ambil data penjualan bulanan, sum total per bulan
        $salesData = Sales::selectRaw('MONTH(sale_time) as month, SUM(total_price) as sales')
            ->groupBy('month')
            ->get()
            ->map(function ($item) {
                return [
                    'month' => Carbon::create()->month($item->month)->shortMonthName, // Mengambil nama bulan
                    'sales' => $item->sales
                ];
            });


        // Mengirim data ke view
        return Inertia::render('AdminHome', [
            'statsData' => $statsData,
            'salesData' => $salesData,
        ]);
    }

    public function product()
    {
        $products = Product::orderBy('updated_at', 'desc')->get(); // Pastikan $products adalah koleksi
        return Inertia::render('AdminProducts', [
            'products' => ProductResource::collection($products)->toArray(request()), // Pastikan diubah ke array
        ]);
    }

    public function createProduct()
    {
        return Inertia::render('AddEditProduct');
    }

    // Menampilkan halaman edit produk
    public function editProduct($id)
    {
        // Cari produk berdasarkan ID beserta gambar terkaitnya
        $product = Product::findOrFail($id);

        // Kirim produk ke halaman frontend melalui Inertia
        return Inertia::render('AddEditProduct', [
            'product' => $product, // Mengirim produk untuk diisi di form
        ]);
    }


    // Menyimpan produk baru atau mengedit produk yang ada
    public function storeProduct(Request $request)
    {
        // Validasi data yang dikirim
        $validated = $request->validate([
            'id' => 'nullable|exists:products,id', // Periksa apakah ID ada untuk update
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'discount' => 'nullable|numeric',
            'category' => 'nullable|string|max:255',
            'stock' => 'nullable|integer',
            'minOrder' => 'nullable|integer',
            'description' => 'required|string',
            'usage' => 'nullable|string',
            'images' => 'nullable|image|max:2048', // Validasi untuk satu file gambar
        ]);

        // Simpan atau perbarui produk terlebih dahulu
        $product = Product::updateOrCreate(
            ['id' => $request->id], // Cari produk berdasarkan ID jika ada
            $request->except('images') // Simpan semua data kecuali images
        );

        // Jika ada file gambar yang diunggah
        if ($request->hasFile('images')) {
            // Hapus gambar lama jika ada
            if ($product->image_path) {
                Storage::disk('public')->delete($product->image_path); // Hapus gambar lama dari storage
            }

            // Simpan file gambar baru dan dapatkan pathnya
            $imagePath = $request->file('images')->store('productImage/' . Str::random(), 'public');

            // Simpan path gambar baru ke dalam field image_path produk yang sama
            $product->image_path = $imagePath;
            $product->save(); // Simpan perubahan ke database
        }

        // Set flash message
        return redirect('/admin/products')->with('success', 'Produk berhasil disimpan.');
    }

    public function sales()
    {
        // Mengambil data penjualan beserta produk terkait
        $sales = Sales::with('product')->orderBy('updated_at', 'desc')->get();

        // Menggunakan SalesResource untuk mengubah data menjadi array
        return Inertia::render('AdminSales', [
            'sales' => SalesResource::collection($sales)->toArray(request()), // Menggunakan resource untuk response
        ]);
    }

    // Menampilkan halaman untuk menambah penjualan
    public function createSales()
    {
        // Mengambil semua produk dengan price dan discount
        $products = Product::select('id', 'name', 'price', 'discount')->get();

        return Inertia::render('AddEditSales', [
            'salesData' => [], // Kosongkan data sales untuk form create
            'products' => $products, // Kirim produk dengan harga dan diskon
        ]);
    }

    // Menampilkan halaman edit penjualan berdasarkan ID
    public function editSales($id)
    {
        $sale = Sales::with('product')->findOrFail($id); // Dapatkan penjualan dengan produk terkait
        $products = Product::all(); // Semua produk untuk dropdown

        return Inertia::render('AddEditSales', [
            'salesData' => [$sale],  // Mengirimkan data penjualan ke komponen
            'products' => $products, // Mengirim produk untuk select option
            'id' => $id // Kirim id ke view agar dapat digunakan di komponen React
        ]);
    }


    // Menyimpan penjualan baru atau mengedit penjualan yang ada
    public function storeSales(Request $request)
    {
        // Validasi input dari form
        $validated = $request->validate([
            'id' => 'nullable|exists:sales,id',
            'product_id' => 'required|exists:products,id',
            'amount' => 'required|integer|min:1',
            'sale_time' => 'required|date',
        ]);

        // Ambil produk yang dipilih dari database
        $product = Product::findOrFail($request->product_id);

        // Cek apakah jumlah pesanan memenuhi stok yang tersedia
        if ($request->amount > $product->stock) {
            return response()->json(['error' => 'Jumlah pesanan melebihi stok yang tersedia.'], 400);
        }

        // Cek apakah jumlah pesanan memenuhi minimum order
        if ($request->amount < $product->minOrder) {
            return response()->json(['error' => 'Jumlah pesanan kurang dari minimum order.'], 400);
        }

        // Hitung total harga berdasarkan harga produk, diskon, dan jumlah
        $price = $product->price;
        $discount = $product->discount / 100; // Mengonversi diskon dari persentase ke desimal
        $discountedPrice = $price - ($price * $discount);
        $totalPrice = $discountedPrice * $request->amount;

        // Jika syarat terpenuhi, kurangi stok produk
        $product->stock -= $request->amount;
        $product->save();

        // Simpan penjualan ke database dengan total_price yang dihitung
        $sale = Sales::updateOrCreate(
            ['id' => $request->id], // Jika ID ada, lakukan update, jika tidak, buat baru
            [
                'product_id' => $request->product_id,
                'amount' => $request->amount,
                'total_price' => $totalPrice, // Masukkan total harga yang dihitung
                'sale_time' => $request->sale_time
            ]
        );

        return response()->json(['success' => 'Penjualan berhasil disimpan.']);
    }

    public function account()
    {
        // Fetch all accounts (or users) ordered by the latest update
        $user = User::orderBy('updated_at', 'desc')->get();

        // Render the 'AdminAccount' page with the fetched account data
        return Inertia::render('AdminAccount', [
            'user' => $user,  // Pass the accounts data to the frontend
        ]);
    }

    public function createAccount()
    {
        return Inertia::render('AddEditUser');
    }

    public function editAccount($id)
    {
        // Cari produk berdasarkan ID beserta gambar terkaitnya
        $user = User::findOrFail($id);

        // Kirim produk ke halaman frontend melalui Inertia
        return Inertia::render('AddEditUser', [
            'user' => $user, // Mengirim produk untuk diisi di form
        ]);
    }

    public function storeAccount(Request $request)
    {
        // Validasi data yang dikirim
        $validated = $request->validate([
            'id' => 'nullable|exists:users,id', // Periksa apakah ID ada untuk update
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $request->id, // Email harus unik, kecuali saat update
        ]);

        // Jika ID user ada, lakukan update, jika tidak ada ID, buat user baru
        $user = User::updateOrCreate(
            ['id' => $request->id], // Cari user berdasarkan ID jika ada
            $request->only(['name', 'email']) // Simpan hanya nama dan email
        );

        // Set flash message
        return redirect('/admin/accounts')->with('success', 'Akun berhasil disimpan.');
    }

    public function deleteItem($table, $id)
    {
        try {
            // Hapus item dari tabel
            DB::table($table)->where('id', $id)->delete();

            // Flash message sukses
            return redirect(`/admin/$table`)->with('success', 'Produk berhasil dihapus.');
        } catch (\Exception $e) {
            // Flash error jika terjadi masalah
            session()->flash('error', 'Failed to delete the item.');

            // Redirect dengan flash error
            return redirect()->back();
        }
    }
    public function Settings()
    {
        // Ambil semua data dari tabel settings
        $settings = Settings::all();

        // Kirim data settings ke komponen Inertia 'AdminSettings'
        return Inertia::render('AdminSettings', [
            'settings' => $settings,
        ]);
    }


    public function updateSet(Request $request, $id)
    {
        $setting = Settings::findOrFail($id);
        $request->validate([
            'value' => 'nullable|string|max:255', // Nullable if you want to allow empty
        ]);

        $setting->update(['value' => $request->value]);

        return redirect()->back()->with('success', 'Setting berhasil diperbarui');
    }
}
