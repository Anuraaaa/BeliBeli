<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PesananController extends Controller
{
    public function index() {
        if (Auth::check())
        {
            return Inertia::render('Pesanan', [
                'title' => 'Pesanan',
                'isUser' => 'pembeli'
            ]);
        }
        return Inertia::render('Pesanan', [
            'title' => 'Pesanan',
            'isUser' => 'tamu'
        ]);
}
}
