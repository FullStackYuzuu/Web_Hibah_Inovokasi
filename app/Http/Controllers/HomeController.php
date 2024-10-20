<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductResource;
use Inertia\Inertia;
use DB;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::with('images')->take(3)->get();
        return Inertia::render('Home', [
            'products' => ProductResource::collection($products)->toArray(request()), // Kirim ke frontend
        ]);
    }


    public function Contact()
    {
        return Inertia::render('Contact', []);
    }

    public function About()
    {
        return Inertia::render('About', []);
    }

    public function Catalog()
    {
        $products = Product::with('images')->get(); // Pastikan $products adalah koleksi
        return Inertia::render('Catalog', [
            'products' => ProductResource::collection($products)->toArray(request()), // Pastikan diubah ke array
        ]);
    }

    public function ProductDetail($id)
    {
        // Ambil data produk berdasarkan ID
        $product = Product::with(['images'])->find($id);

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
