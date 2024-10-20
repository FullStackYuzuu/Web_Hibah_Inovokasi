<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Models\Product;
use App\Http\Resources\ProductResource;
use App\Models\Sales;
use App\Http\Resources\SalesResource;

use DB;

class AdminController extends Controller
{
    public function redirect()
    {
        return Socialite::driver('google')->redirect();
    }

    public function callback()
    {
        try {
            $googleUser = Socialite::driver('google')->user();
        } catch (\Exception $e) {
            return redirect('/admin-login');
        }

        // Periksa apakah email pengguna ada di database
        $user = User::where('email', $googleUser->email)->first();

        if (!$user || !$user->is_admin) {
            return redirect('/admin-login')->withErrors(['email' => 'Akun ini tidak memiliki akses admin.']);
        }

        // Login pengguna
        auth('web')->login($user);
        session()->regenerate();

        // Redirect ke halaman admin
        return redirect('/admin');
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
        return Inertia::render('AdminHome', []);
    }

    public function product()
    {
        $products = Product::with('images')->orderBy('updated_at', 'desc')->get(); // Pastikan $products adalah koleksi
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
        $product = Product::with('images')->findOrFail($id);

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
            'images.*' => 'nullable|image|max:2048', // Validasi untuk file gambar
        ]);

        // Jika ID produk ada, lakukan update, jika tidak ada ID, buat produk baru
        $product = Product::updateOrCreate(
            ['id' => $request->id], // Cari produk berdasarkan ID jika ada
            $request->except('images') // Simpan semua data kecuali images
        );

        // Jika ada file gambar yang diunggah
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('products', 'public'); // Simpan gambar di storage
                $product->images()->create(['image_path' => $path]); // Simpan path gambar ke database
            }
        }

        // Set flash message
        return redirect('/admin/products')->with('success', 'Produk berhasil disimpan.');
    }

    public function sales()
    {
        // Mengambil data penjualan beserta produk terkait
        $sales = Sales::with('product')->orderBy('sale_time', 'desc')->get();

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
        // Mencari data penjualan berdasarkan ID dan produk terkait
        $sale = Sales::with('product')->findOrFail($id);

        // Mengambil semua produk dengan price dan discount untuk dropdown
        $products = Product::select('id', 'name', 'price', 'discount')->get();

        // Mengirim data penjualan dan produk ke halaman form edit
        return Inertia::render('AddEditSales', [
            'salesData' => SalesResource::make($sale), // Kirim data penjualan untuk diisi di form
            'products' => $products, // Kirim produk dengan harga dan diskon
        ]);
    }

    // Menyimpan penjualan baru atau mengedit penjualan yang ada
    public function storeSales(Request $request)
    {
        $validated = $request->validate([
            'id' => 'nullable|exists:sales,id',
            'product_id' => 'required|exists:products,id',
            'amount' => 'required|integer|min:1',
            'total_price' => 'required|numeric|min:0',
            'sale_time' => 'required|date',
        ]);

        $sale = Sales::updateOrCreate(
            ['id' => $request->id],
            $request->only(['product_id', 'amount', 'total_price', 'sale_time'])
        );

        var_dump($sale);
        die();

        return redirect('/admin/sales')->with('success', 'Penjualan berhasil disimpan.');
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
}
