<?php
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('register', [RegisterController::class, 'index'])
                ->name('register');

    Route::post('register', [RegisterController::class, 'store']);

    Route::get('login', [LoginController::class, 'index'])
                ->name('login');

    Route::post('login', [LoginController::class, 'authenticate']);
});

Route::middleware('auth')->group(function () {

    Route::post('logout', [LoginController::class, 'logout'])
                ->name('logout');
});
