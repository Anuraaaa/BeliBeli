<?php

use App\Http\Controllers\AboutController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\BarangController;
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

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
