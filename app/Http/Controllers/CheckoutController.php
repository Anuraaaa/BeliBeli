<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Inertia\Inertia;
use App\Models\Pesanan;
use Illuminate\Http\Request;
use App\Models\PesananDetail;
use Illuminate\Support\Facades\Auth;

class CheckoutController extends Controller
{
    public function index ()
    {
        if (Auth::check())
        {
            $barangs = Barang::paginate(5);
            $pesanan_user = Pesanan::where('id_user', Auth::user()->id)->first();
            if (!empty($pesanan_user))
            {
                $pesanan_detail = PesananDetail::where('id_pesanan', $pesanan_user->id_pesanan)->get();
                return Inertia::render('Checkout', [
                    'title' => 'Checkout',
                    'pesanan_detail' => $pesanan_detail,
                    'pesanan' => $pesanan_user,
                    'pesananCount' => $pesanan_detail->count(),
                    'barangs' => $barangs,
                ]);
            }
            else
            {
                return Inertia::render('Checkout', [
                    'title' => 'Checkout'
                ]);            
            }
        }
        else
        {
            return redirect('/login');
        }
    }
}
