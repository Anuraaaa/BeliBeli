<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Barang;

class DashboardController extends Controller
{
    public function index ()
    {
        $barangs = Barang::paginate(5);
        return Inertia::render('Barang', [
            'title' => 'Home', 
            'barangs' => $barangs,
        ]);
    }
}
