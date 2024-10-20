<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AdminController;

// Routes untuk UserLayout

Route::get('/', [HomeController::class, 'index']);

Route::get('/about', [HomeController::class, 'About']);

Route::get('/catalog', [HomeController::class, 'Catalog']);

Route::get('/contact', [HomeController::class, 'Contact']);

Route::get('/product/{id}', [HomeController::class, 'ProductDetail']);

// Routes untuk AdminLayout
Route::get('/admin-login', function () {
    return Inertia::render('AdminLoginPage');
});

Route::get('/auth/google/redirect', [AdminController::class, 'redirect']);
Route::get('/auth/google/callback', [AdminController::class, 'callback']);
Route::get('/admin/logout', [AdminController::class, 'logout']);

// // Route untuk admin dengan middleware
// Route::middleware(['auth', 'admin'])->group(function () {
//     Route::get('/admin', function () {
//         return Inertia::render('AdminHome');
//     });

//     // Routes untuk Admin Products
//     Route::get('/admin/products', function () {
//         return Inertia::render('AdminProducts');
//     });

//     Route::get('/admin/products/add', function () {
//         return Inertia::render('AddEditProduct');
//     });

//     Route::get('/admin/products/edit/{id}', function ($id) {
//         return Inertia::render('AddEditProduct', ['id' => $id]);
//     });

//     // Routes untuk Admin Sales
//     Route::get('/admin/sales', function () {
//         return Inertia::render('AdminSales');
//     });

//     Route::get('/admin/sales/add', function () {
//         return Inertia::render('AddEditSales');
//     });

//     Route::get('/admin/sales/edit/{id}', function ($id) {
//         return Inertia::render('AddEditSales', ['id' => $id]);
//     });

//     // Routes untuk Admin Accounts
//     Route::get('/admin/accounts', function () {
//         return Inertia::render('AdminAccount');
//     });

//     Route::get('/admin/accounts/add', function () {
//         return Inertia::render('AddEditUser');
//     });

//     Route::get('/admin/accounts/edit/{id}', function ($id) {
//         return Inertia::render('AddEditUser', ['id' => $id]);
//     });
// });

Route::get('/admin', [AdminController::class, 'index']);
Route::delete('/delete-item/{table}/{id}', [AdminController::class, 'deleteItem'])->name('item.delete');

Route::get('/admin/products', [AdminController::class, 'product']);
Route::get('/admin/products/add', [AdminController::class, 'createProduct'])->name('admin.products.add');
Route::get('/admin/products/edit/{id}', [AdminController::class, 'editProduct'])->name('admin.products.edit');
Route::post('/admin/products/store', [AdminController::class, 'storeProduct'])->name('admin.products.store');

// Routes untuk Admin Sales

Route::get('/admin/sales', [AdminController::class, 'sales']);
Route::get('/admin/sales/add', [AdminController::class, 'createSales']);
Route::get('/admin/sales/edit/{id}', [AdminController::class, 'editSales']);
Route::post('/admin/sales/store', [AdminController::class, 'storeSales']);

// Routes untuk Admin Accounts

Route::get('/admin/accounts', [AdminController::class, 'Account']);
Route::get('/admin/accounts/add', [AdminController::class, 'createAccount']);
Route::get('/admin/accounts/edit/{id}', [AdminController::class, 'editAccount']);
Route::post('/admin/accounts/store', [AdminController::class, 'storeAccount']);

// Route::get('/admin/accounts', function () {
//     return Inertia::render('AdminAccount');
// });

// Route::get('/admin/accounts/add', function () {
//     return Inertia::render('AddEditUser');
// });

// Route::get('/admin/accounts/edit/{id}', function ($id) {
//     return Inertia::render('AddEditUser', ['id' => $id]);
// });

// Route::get('/admin/logout', function () {
//     // Redirect ke Home atau logika logout lainnya
//     return redirect('/');
// });


// Route::get('/', function () {
//     return Inertia::render('Home', [
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
