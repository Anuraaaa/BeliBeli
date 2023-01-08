<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Inertia\Inertia;
use App\Models\Pesanan;
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
                    'title' => 'Checkout',
                    'pesanan_detail' => [],
                    'pesanan' => 0,
                    'pesananCount' => 0,
                    'barangs' => $barangs
                ]);            
            }
        }
        else
        {
            return redirect('/login');
        }
    }

    public function remove($id_pesanan_detail)
    {
        if (Auth::check())
        {
            $pesanan_user = Pesanan::where('id_user', Auth::user()->id)->first();
            if (!empty($pesanan_user))
            {
                $pesanan_detail = PesananDetail::where('id_pesanan', $pesanan_user->id_pesanan)->where('id_pesanan_detail', $id_pesanan_detail)->first();
                
                if (!empty($pesanan_detail))
                {
                    $harga_pesanan_update = $pesanan_user->jumlah_harga - $pesanan_detail->jumlah_harga;
                    Pesanan::where('id_user', Auth::user()->id)->update(['jumlah_harga' => $harga_pesanan_update]);
                    $pesanan_detail_delete = PesananDetail::where('id_pesanan', $pesanan_user->id_pesanan)->where('id_pesanan_detail', $id_pesanan_detail);
                    $pesanan_detail_delete->delete();

                    if (!$pesanan_detail->count())
                    {
                        $pesanan_user_delete = Pesanan::where('id_user', Auth::user()->id);
                        $pesanan_user_delete->delete();    
                    }
                    return redirect('/checkout');   
                }
            }
        }
    }

    public function checkout()
    {
        if (Auth::check())
        {
            $pesanan_user = Pesanan::where('id_user', Auth::user()->id)->first();
            if (!empty($pesanan_user))
            {
                
                $pesanan_detail = PesananDetail::where('id_pesanan', $pesanan_user->id_pesanan)->first();
                $barang = Barang::where('id_barang', $pesanan_detail->id_barang)->first();

                $stock_barang = $barang->stock - $pesanan_detail->jumlah_pesanan;

                Barang::where('id_barang', $pesanan_detail->id_barang)->update(['stock' => $stock_barang]);                
                PesananDetail::where('id_pesanan', $pesanan_user->id_pesanan)->delete();
                Pesanan::where('id_user', Auth::user()->id)->delete();
            }
        }
        return redirect('/');   
    }
}
