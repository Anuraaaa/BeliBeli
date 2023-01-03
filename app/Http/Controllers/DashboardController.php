<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Barang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index ()
    {
        $user = Auth::user();
        $barangs = Barang::paginate(5);
        return Inertia::render('Barang', [
            'title' => 'Home', 
            'isUser' => 'pembeli',
            'barangs' => $barangs,
            'dataUser' => $user->nama_lengkap
        ]);
}
    public function indexPage ($page)
    {
        $barangs = Barang::paginate(5);
        return Inertia::render('Dashboard', [
            'title' => 'Home', 
            'isUser' => 'tamu',
            'barangs' => $barangs,
            'dataUser' => ''
        ]);
    }
}
