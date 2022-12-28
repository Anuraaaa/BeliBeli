<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BarangController extends Controller
{
    public function index ()
    {
        $barangs = Barang::paginate(5);
        return Inertia::render('Barang', [
            'title' => 'Home', 
            'isUser' => 'tamu',
            'barangs' => $barangs,
            'dataUser' => ''
        ]);
    }
}
