<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Barang;
use App\Models\Pesanan;
use App\Models\PesananDetail;
use Illuminate\Support\Facades\Auth;

class BarangController extends Controller
{
    public function index ()
    {
        $barangs = Barang::paginate(5);
        if (Auth::check())
        {
            $pesanan_user = Pesanan::where('id_user', Auth::user()->id)->first();
            if (!empty($pesanan_user))
            {
                $pesanan_detail = PesananDetail::where('id_pesanan', $pesanan_user->id_pesanan)->first();
                if (!empty($pesanan_detail))
                {
                    return Inertia::render('Barang', [
                        'title' => 'Home',
                        'barangs' => $barangs,
                        'pesananCount' => $pesanan_detail->count()
                    ]);                    
                }
                else
                {
                    return Inertia::render('Barang', [
                        'title' => 'Home',
                        'barangs' => $barangs,
                        'pesananCount' => 0
                    ]);                    
                }
            }
            else
            {
                return Inertia::render('Barang', [
                    'title' => 'Home',
                    'barangs' => $barangs,
                    'pesananCount' => 0
                ]);            
            }
        }
        else
        {
            return Inertia::render('Barang', [
                'title' => 'Home',
                'barangs' => $barangs,
                'pesananCount' => 0
            ]);            
        }
    }
    public function indexPage ($page)
    {
        $barangs = Barang::paginate(5);
        if (Auth::check())
        {
            $pesanan_user = Pesanan::where('id_user', Auth::user()->id)->first();
            if (!empty($pesanan_user))
            {
                $pesanan_detail = PesananDetail::where('id_pesanan', $pesanan_user->id_pesanan)->first();
                return Inertia::render('Barang', [
                    'title' => 'Home',
                    'barangs' => $barangs,
                    'pesananCount' => $pesanan_detail->count()
                ]);
            }
            else
            {
                return Inertia::render('Barang', [
                    'title' => 'Home',
                    'barangs' => $barangs,
                    'pesananCount' => 0
                ]);            
            }
        }
        else
        {
            return Inertia::render('Barang', [
                'title' => 'Home',
                'barangs' => $barangs,
                'pesananCount' => 0
            ]);            
        }
    }
}
