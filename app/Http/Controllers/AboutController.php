<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Pesanan;
use App\Models\PesananDetail;
use Illuminate\Support\Facades\Auth;

class AboutController extends Controller
{
    public function index()
    {
        if (Auth::check())
        {
            $pesanan_user = Pesanan::where('id_user', Auth::user()->id)->first();
            if (!empty($pesanan_user))
            {
                $pesanan_detail = PesananDetail::where('id_pesanan', $pesanan_user->id_pesanan)->get();
                return Inertia::render('About', [
                    'title' => 'About',
                    'pesananCount' => $pesanan_detail->count()
                ]);    
            }
            else 
            {
                return Inertia::render('About', [
                    'title' => 'About',
                    'pesananCount' => 0
                ]);                
            }
        }
        else
        {
            return Inertia::render('About', [
                'title' => 'About',
                'pesananCount' => 0
            ]);                
        }
    }
}
