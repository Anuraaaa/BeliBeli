<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\BarangController;
use App\Http\Controllers\PesananController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\ProductStoreController;
use App\Http\Controllers\StoresController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [BarangController::class, 'index']);
Route::get('/about', [AboutController::class, 'index']);

Route::get('/page={page}/pesanan/{barang}={id}', [PesananController::class, 'index']);
Route::post('/page={page}/pesanan/{barang}={id}', [PesananController::class, 'pesan']);
Route::get('/checkout', [CheckoutController::class, 'index'])->name('checkout');
Route::post('/checkout/all/', [CheckoutController::class, 'checkout']);
Route::post('/checkout={id_barang_detail}', [CheckoutController::class, 'remove']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::post('/store/add', [StoresController::class, 'addstore'])->name('store.add');
    Route::patch('/store/edit', [StoresController::class, 'editstore'])->name('store.edit');
    Route::delete('/store/delete', [StoresController::class, 'destroystore'])->name('store.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/store/product', [ProductStoreController::class, 'indexMain'])->name('store.product.main');
    Route::get('/store/product/view', [ProductStoreController::class, 'indexProductView'])->name('store.product.view');
    Route::post('/store/product/add', [ProductStoreController::class, 'indexProductAdd']);
    Route::post('/store/product/delete={id_barang}', [ProductStoreController::class, 'indexProductDelete']);
});


Route::get('storage/barang/{path}', function ($path) {
    return response()->file(public_path("storage/barang/$path"));
});
require __DIR__.'/auth.php';
