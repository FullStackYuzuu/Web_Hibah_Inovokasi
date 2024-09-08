<?php

namespace App\Http\Controllers;

use App\Models\Sales;
use App\Models\Product;
use Illuminate\Http\Request;

class SalesController extends Controller
{
    public function index()
{
    $sales = Sales::with('product')->get();
    
    // Group sales by date and sum total prices
    $salesData = $sales->groupBy(function ($sale) {
        return $sale->sale_time->format('Y-m-d');  // Format date as 'Y-m-d'
    })->map(function ($salesByDate) {
        return $salesByDate->sum('total_price');
    })->sortKeys();  // Sort the keys (dates) in ascending order
    
    // Convert to arrays for labels and data
    $labels = $salesData->keys()->toArray();
    $data = $salesData->values()->toArray();
    
    return view('sales.index', compact('sales', 'labels', 'data'));
}


    public function create()
    {
        $products = Product::all();
        return view('sales.create', compact('products'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'phone_number' => 'required|string|max:15',
            'product_id' => 'required|exists:products,id',
            'amount' => 'required|integer|min:1',
            'total_price' => 'required|numeric',
            'sale_time' => 'nullable|date', 
        ]);

        Sales::create([
            'phone_number' => $request->input('phone_number'),
            'product_id' => $request->input('product_id'),
            'amount' => $request->input('amount'),
            'total_price' => $request->input('total_price'),
            'sale_time' => $request->input('sale_time') ?: now(),  // Use current time if not provided
        ]);

        return redirect()->route('sales.index')->with('success', 'Sale recorded successfully.');
    }

    public function edit(Sales $sale)
    {
        $products = Product::all();
        return view('sales.edit', compact('sale', 'products'));
    }

    public function update(Request $request, Sales $sale)
    {
        $request->validate([
            'phone_number' => 'required|string|max:15',
            'product_id' => 'required|exists:products,id',
            'amount' => 'required|integer|min:1',
            'total_price' => 'required|numeric',
            'sale_time' => 'nullable|date',  // Allow any date format
        ]);

        $sale->update([
            'phone_number' => $request->input('phone_number'),
            'product_id' => $request->input('product_id'),
            'amount' => $request->input('amount'),
            'total_price' => $request->input('total_price'),
            'sale_time' => $request->input('sale_time') ?: now(),
        ]);

        return redirect()->route('sales.index')->with('success', 'Sale updated successfully.');
    }
    public function destroy(Sales $sale)
    {
        $sale->delete();
        return redirect()->route('sales.index')->with('success', 'Sale deleted successfully.');
    }
}
