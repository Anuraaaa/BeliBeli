<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Barang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class BarangController extends Controller
{
    public function index ()
    {
        $barangs = Barang::paginate(5);
        return Inertia::render('Barang', [
            'title' => 'Home',
            'barangs' => $barangs,
        ]);
    }
    public function indexPage ($page)
    {
        $barangs = Barang::paginate(5);
        return Inertia::render('Barang', [
            'title' => 'Home', 
            'barangs' => $barangs,
        ]);
    }
}
