<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Barang;
use App\Models\Pesanan;
use Illuminate\Http\Request;
use App\Models\PesananDetail;
use Illuminate\Support\Facades\Auth;
use RealRashid\SweetAlert\Facades\Alert;

class PesananController extends Controller
{
    public function index(Request $request, $page, $barang, $id) {

        $token = $request->session()->token();
        $token = csrf_token();

        $data = Barang::where('id_barang', $id)->first();    
        if (Auth::check())
        {
            $pesanan_user = Pesanan::where('id_user', Auth::user()->id)->first();
            if (!empty($pesanan_user))
            {
                $pesanan_detail = PesananDetail::where('id_pesanan', $pesanan_user->id_pesanan)->get();
                if (!empty($pesanan_detail))
                {
                    return Inertia::render('Pesanan', [
                        'title' => 'Pesanan',
                        'data' => $data,
                        'currentPage' => $page,
                        'namabarang' => $barang,
                        'token' => $token,
                        'pesananCount' => $pesanan_detail->count()
                    ]);                    
                }
                else
                {
                    return Inertia::render('Pesanan', [
                        'title' => 'Pesanan',
                        'data' => $data,
                        'currentPage' => $page,
                        'namabarang' => $barang,
                        'token' => $token,
                        'pesananCount' => 0
                    ]);                    
                }
            }
            else
            {
                return Inertia::render('Pesanan', [
                    'title' => 'Pesanan',
                    'data' => $data,
                    'currentPage' => $page,
                    'namabarang' => $barang,
                    'token' => $token,
                    'pesananCount' => 0
                ]);
            }

        }
        else
        {
            return Inertia::render('Pesanan', [
                'title' => 'Pesanan',
                'data' => $data,
                'currentPage' => $page,
                'namabarang' => $barang,
                'token' => $token,
                'pesananCount' => 0
            ]);
        }
    }

    public function pesan(Request $request, $page, $namabarang, $id) 
    {
        if (Auth::check())
        {
            $barang = Barang::where('id_barang', $id)->first();
            $tanggal = Carbon::now();

            //cek stok 
            if ($request->jumlah_pesanan > $barang->stock || $request->jumlah_pesanan <= 0 || $barang->stock <= 0)
            {
                if ($barang->stock <= 0) {

                    Alert::error('Error', 'Stock barang sudah habis');
                    return redirect('/page='. $page. '/pesanan/'. $namabarang. '='. $id);
                }
                else if ($request->jumlah_pesanan > $barang->stock) {

                    Alert::error('Error', 'Kamu tidak bisa memesan barang melebihi dari stock yang ada');
                    return redirect('/page='. $page. '/pesanan/'. $namabarang. '='. $id);
                }
                else if ($request->jumlah_pesanan == 0) {
                    
                    Alert::error('Error', 'Kamu tidak bisa memesan barang sebanyak 0 buah');
                    return redirect('/page='. $page. '/pesanan/'. $namabarang. '='. $id);
                }
                else if ($request->jumlah_pesanan < 0) {
                    
                    Alert::error('Error', 'Kamu tidak bisa memesan barang kurang dari stock yang ada');
                    return redirect('/page='. $page. '/pesanan/'. $namabarang. '='. $id);
                }
            }

            //cek pesanan jika sudah ada tidak perlu membuat baru, tapi menambahkan
            $cek_pesanan = Pesanan::where('id_user', Auth::user()->id)->where('status_pesanan', 0)->first();
            if(empty($cek_pesanan))
            {
                $pesanan = new Pesanan();
                $pesanan->id_user = Auth::user()->id;
                $pesanan->tanggal_pesanan = $tanggal;
                $pesanan->status_pesanan = 0;
                $pesanan->jumlah_harga = 0;
                $pesanan->save();
            }
            $pesanan_baru = Pesanan::where('id_user', Auth::user()->id)->where('status_pesanan', 0)->first();

            $cek_pesanan_detail = PesananDetail::where('id_barang', $barang->id_barang)->where('id_pesanan', $pesanan_baru->id_pesanan)->first();

            if (empty($cek_pesanan_detail))
            {
                $pesanan_detail = new PesananDetail();
                $pesanan_detail->id_barang = $barang->id_barang;
                $pesanan_detail->id_pesanan = $pesanan_baru->id_pesanan;
                $pesanan_detail->jumlah_pesanan = $request->jumlah_pesanan;
                $pesanan_detail->jumlah_harga = $barang->harga * $request->jumlah_pesanan;
                $pesanan_detail->nama_barang = $barang->nama_barang;
                $pesanan_detail->harga_satuan_barang = $barang->harga;
                $pesanan_detail->keterangan_barang = $barang->keterangan;
                $pesanan_detail->image_barang = $barang->image;
                $pesanan_detail->save();

                $pesanan_user = Pesanan::where('id_user', Auth::user()->id)->first();
                if (!empty($pesanan_user))
                {
                    $pesanan_detail = PesananDetail::where('id_pesanan', $pesanan_user->id_pesanan)->first();
                    $barang = Barang::where('id_barang', $pesanan_detail->id_barang)->first();
    
                    $stock_barang = $barang->stock - $pesanan_detail->jumlah_pesanan;
    
                    Barang::where('id_barang', $pesanan_detail->id_barang)->update(['stock' => $stock_barang]);                
                }
            }
            else
            {
                $pesanan_detail = PesananDetail::where('id_barang', $barang->id_barang)->where('id_pesanan', $pesanan_baru->id_pesanan)->first();
                $pesanan_detail->jumlah_pesanan = $pesanan_detail->jumlah_pesanan + $request->jumlah_pesanan;
                $harga_detail_baru = $barang->harga * $request->jumlah_pesanan;
                $pesanan_detail->jumlah_harga = $pesanan_detail->jumlah_harga + $harga_detail_baru;
                $pesanan_detail->nama_barang = $barang->nama_barang;
                $pesanan_detail->harga_satuan_barang = $barang->harga;
                $pesanan_detail->keterangan_barang = $barang->keterangan;

                $barang = Barang::where('id_barang', $pesanan_detail->id_barang)->first();
                $stock_barang = $barang->stock - $request->jumlah_pesanan;
                Barang::where('id_barang', $pesanan_detail->id_barang)->update(['stock' => $stock_barang]);                


                PesananDetail::where('id_barang', $barang->id_barang)->where('id_pesanan', $pesanan_baru->id_pesanan)->update([
                    'jumlah_harga' => $pesanan_detail->jumlah_harga, 
                    'jumlah_pesanan' => $pesanan_detail->jumlah_pesanan,
                    'nama_barang' => $pesanan_detail->nama_barang,
                    'harga_satuan_barang' => $pesanan_detail->harga_satuan_barang,
                    'keterangan_barang' => $pesanan_detail->keterangan_barang
                ]);                
            }
            $pesanan_update = Pesanan::where('id_user', Auth::user()->id)->where('status_pesanan', 0)->first();
            $harga_pesanan_baru = $barang->harga * $request->jumlah_pesanan;
            $pesanan_update->jumlah_harga = $pesanan_update->jumlah_harga + $harga_pesanan_baru;
            Pesanan::where('id_user', Auth::user()->id)->where('status_pesanan', 0)->update(['jumlah_harga' => $pesanan_update->jumlah_harga]);
            Alert::success('Sukses', 'Kamu berhasil menambahkan barang ini ke keranjang');
            return redirect('/');
        }
        else
        {
            return redirect('/login');
        }
    }
}
