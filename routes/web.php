<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SalesController;
use App\Http\Controllers\UsersController;

Route::get('/', function () {
    return view('welcome');
});

Route::resource('products', ProductController::class);
Route::resource('sales', SalesController::class);
Route::get('sales', [SalesController::class, 'index'])->name('sales.index');
Route::get('sales/create', [SalesController::class, 'create'])->name('sales.create');
Route::post('sales', [SalesController::class, 'store'])->name('sales.store');
Route::get('sales/{sale}/edit', [SalesController::class, 'edit'])->name('sales.edit');
Route::put('sales/{sale}', [SalesController::class, 'update'])->name('sales.update');
Route::delete('sales/{sale}', [SalesController::class, 'destroy'])->name('sales.destroy');
Route::get('products/{product}/price', [ProductController::class, 'getPrice']);
Route::get('/users', [UsersController::class, 'index'])->name('users.index');
Route::get('/users/{user}/edit', [UsersController::class, 'edit'])->name('users.edit');
Route::put('/users/{user}', [UsersController::class, 'update'])->name('users.update');
Route::delete('/users/{user}', [UsersController::class, 'destroy'])->name('users.destroy');
