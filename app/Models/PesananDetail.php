<?php

namespace App\Models;

use App\Models\Barang;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PesananDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_barang',
        'nama_barang',
        'harga_satuan_barang',
        'keterangan_barang',
        'image_barang',
        'id_pesanan',
        'jumlah_pesanan',
        'jumlah_harga'
    ];

}
