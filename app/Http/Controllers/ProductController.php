<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return view('products.index', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('products.create');
    }

    // Handle the form submission to store a new product
    public function store(Request $request)
    {
        // Validate the request data
        $request->validate([
            'nama' => 'required|string|max:255',
            'harga' => 'required|numeric',
            'foto' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
            'deskripsi' => 'required|string',
            'kegunaan' => 'required|string|max:255',
        ]);

        // Handle the image upload if there is one
        $fotoPath = null;
        if ($request->hasFile('foto')) {
            $fotoPath = $request->file('foto')->store('product_photos', 'public');
        }

        // Create a new product
        Product::create([
            'nama' => $request->input('nama'),
            'harga' => $request->input('harga'),
            'foto' => $fotoPath,
            'deskripsi' => $request->input('deskripsi'),
            'kegunaan' => $request->input('kegunaan'),
        ]);

        // Redirect to the product list with a success message
        return redirect()->route('products.index')->with('success', 'Product added successfully.');
    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
{
    $product = Product::findOrFail($id);
    return view('products.edit', compact('product'));
}

public function update(Request $request, $id)
{
    $request->validate([
        'nama' => 'required|string|max:255',
        'harga' => 'required|numeric',
        'foto' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
        'deskripsi' => 'required|string',
        'kegunaan' => 'required|string|max:255',
    ]);

    $product = Product::findOrFail($id);

    if ($request->hasFile('foto')) {
        // Delete old photo if a new one is uploaded
        if ($product->foto) {
            Storage::disk('public')->delete($product->foto);
        }
        $fotoPath = $request->file('foto')->store('product_photos', 'public');
        $product->foto = $fotoPath;
    }

    $product->nama = $request->input('nama');
    $product->harga = $request->input('harga');
    $product->deskripsi = $request->input('deskripsi');
    $product->kegunaan = $request->input('kegunaan');

    $product->save();

    return redirect()->route('products.index')->with('success', 'Product updated successfully.');
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
{
    $product = Product::findOrFail($id);

    // Delete the product's photo from storage
    if ($product->foto) {
        Storage::disk('public')->delete($product->foto);
    }

    $product->delete();

    return redirect()->route('products.index')->with('success', 'Product deleted successfully.');
}
}
