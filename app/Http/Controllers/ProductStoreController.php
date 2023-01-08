<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Inertia\Inertia;
use App\Models\Stores;
use App\Models\Pesanan;
use Illuminate\Http\Request;
use App\Models\PesananDetail;
use Illuminate\Support\Facades\Auth;

class ProductStoreController extends Controller
{
    public function indexMain()
    {
        $pesanan_user = Pesanan::where('id_user', Auth::user()->id)->first();
        $store_user = Stores::where('id_user', Auth::user()->id)->first();
        $barangs = Barang::where('id_store', $store_user->id_store)->get();
        if (!empty($barangs))
        {
            if (!empty($pesanan_user))
            {            
                $pesanan_detail = PesananDetail::where('id_pesanan', $pesanan_user->id_pesanan)->get();
                return Inertia::render('ProductStore/ViewProductStore', [
                    'title' => 'Product',
                    'pesanan_detail' => $pesanan_detail,
                    'pesanan' => $pesanan_user,
                    'pesananCount' => empty($pesanan_detail) ? 0 : $pesanan_detail->count(),
                    'store' => empty($store_user) ? 0: $store_user,
                    'barangs' => $barangs
                ]);
            }
            else
            {
                return Inertia::render('ProductStore/ViewProductStore', [
                    'title' => 'Product',
                    'pesanan_detail' => [],
                    'pesanan' => 0,
                    'pesananCount' => 0,
                    'store' => empty($store_user) ? 0: $store_user,
                    'barangs' => $barangs
                ]);                
            }
        }
        return Inertia::render('ProductStore/ViewProductStore', [
            'title' => 'Profile',
            'pesanan_detail' => [],
            'pesanan' => 0,
            'pesananCount' => 0,
            'store' => empty($store_user) ? 0: $store_user,
            'barangs' => $barangs 
        ]);                
    }
    
    public function indexProductView(Request $request)
    {
        $token = $request->session()->token();
        $token = csrf_token();

        $pesanan_user = Pesanan::where('id_user', Auth::user()->id)->first();
        $store_user = Stores::where('id_user', Auth::user()->id)->first();
        $barangs = Barang::where('id_store', $store_user->id_store);
        if (!empty($barangs))
        {
            if (!empty($pesanan_user))
            {            
                $pesanan_detail = PesananDetail::where('id_pesanan', $pesanan_user->id_pesanan)->get();
                return Inertia::render('ProductStore/AddProductStore', [
                    'title' => 'Product',
                    'pesanan_detail' => $pesanan_detail,
                    'pesanan' => $pesanan_user,
                    'pesananCount' => empty($pesanan_detail) ? 0 : $pesanan_detail->count(),
                    'store' => empty($store_user) ? 0: $store_user,
                    'barangs' => $barangs,
                    'token' => $token
                ]);
            }
            else
            {
                return Inertia::render('ProductStore/AddProductStore', [
                    'title' => 'Product',
                    'pesanan_detail' => [],
                    'pesanan' => 0,
                    'pesananCount' => 0,
                    'store' => empty($store_user) ? 0: $store_user,
                    'barangs' => $barangs,
                    'token' => $token
                ]);                
            }
        }
        return Inertia::render('ProductStore/AddProductStore', [
            'title' => 'Profile',
            'pesanan_detail' => [],
            'pesanan' => 0,
            'pesananCount' => 0,
            'store' => empty($store_user) ? 0: $store_user,
            'barangs' => $barangs,
            'token' => $token
        ]);                
    }

    public function indexProductAdd(Request $request)
    {
        $request->validate([
            'productname' => 'required|min:5|max:32',
            'price' => 'required',
            'stock' => 'required',
            'keterangan' => 'required|min:5|max:124',
            'image' => 'required|min:0|max:1024'
        ]);

        $store = Stores::where('id_user', Auth::user()->id)->first();

        if (!empty($store))
        {
            $path = $request->file('image')->store('barang');

            Barang::create([
                'nama_barang' => $request->productname,
                'id_store' => $store->id_store,
                'harga' => $request->price,
                'stock' => $request->stock,
                'keterangan' => $request->keterangan,
                'image' => $path
            ]);

        }
        return redirect()->route('store.product.main');
    }
}
