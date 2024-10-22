<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductResource;
use Inertia\Inertia;
use App\Models\Sales;
use App\Models\Settings;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::take(3)->get();
        return Inertia::render('Home', [
            'products' => ProductResource::collection($products)->toArray(request()), // Kirim ke frontend
        ]);
    }


    public function Contact()
    {
        // Fetch settings where the key matches one of the specified values
        $settings = Settings::whereIn('key', [
            'whatsapp_number',
            'email',
            'tiktok',
            'instagram',
            'shopee',
            'tokopedia',
            'facebook'
        ])->pluck('value', 'key'); // Use pluck to get key-value pairs

        return Inertia::render('Contact', [
            'settings' => $settings
        ]);
    }


    public function About()
    {
        return Inertia::render('About', []);
    }

    public function Catalog()
    {
        $products = Product::get(); // Pastikan $products adalah koleksi
        return Inertia::render('Catalog', [
            'products' => ProductResource::collection($products)->toArray(request()), // Pastikan diubah ke array
        ]);
    }

    public function ProductBuy(Request $request, $id, $quantity)
    {
        // Ambil data produk berdasarkan ID
        $product = Product::findOrFail($id);

        // Hitung total harga
        $price = $product->discount ? $product->price - ($product->price * ($product->discount / 100)) : $product->price;
        $totalPrice = $price * $quantity;

        // Simpan data transaksi ke tabel sales
        $sale = Sales::create([
            'product_id' => $id,
            'amount' => $quantity,
            'total_price' => $totalPrice,
        ]);

        // Kurangi stok produk
        $product->stock -= $quantity;
        $product->save();

        // Ambil nomor WhatsApp dari tabel settings
        $whatsappNumber = Settings::where('key', 'whatsapp_number')->first()->value;

        // Format pesan WhatsApp
        $whatsappMessage = urlencode("*ORDER RH LAKSAMANA*\n*ID Pesanan*: {$sale->id}\n*Nama Produk*: {$product->name}\n*Kuantitas*: {$quantity} Kg\n*Total Harga*: Rp. " . number_format($totalPrice, 0, ',', '.'));

        // Arahkan ke WhatsApp dengan pesan yang telah di-generate
        return redirect()->away("https://wa.me/{$whatsappNumber}/?text={$whatsappMessage}");
    }


    public function ProductDetail($id)
    {
        // Ambil data produk berdasarkan ID
        $product = Product::find($id);

        // Jika produk tidak ditemukan, kembalikan respons 404
        if (!$product) {
            abort(404, 'Product not found');
        }

        // Tampilkan halaman Inertia dengan data produk
        return Inertia::render('ProductDetail', [
            'product' => $product
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
