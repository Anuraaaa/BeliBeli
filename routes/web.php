<?php

use App\Http\Controllers\AboutController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\BarangController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\PesananController;

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

require __DIR__.'/auth.php';
