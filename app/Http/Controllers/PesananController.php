<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PesananController extends Controller
{
    public function index($page, $barang, $id) {

        $data = Barang::where('id_barang', $id)->first();    
        if (Auth::check())
        {
            return Inertia::render('Pesanan', [
                'title' => 'Pesanan',
                'isUser' => 'pembeli',
                'data' => $data,
                'currentPage' => $page,
                'namabarang' => $barang
            ]);
        }
        return Inertia::render('Pesanan', [
            'title' => 'Pesanan',
            'isUser' => 'tamu',
            'data' => $data,
            'currentPage' => $page,
            'namabarang' => $barang
        ]);
    }
}
