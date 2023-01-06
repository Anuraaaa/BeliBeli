<?php

namespace App\Models;

use App\Models\Barang;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PesananDetail extends Model
{
    use HasFactory;

    public function Barang() 
    {
        return $this->belongsTo(Barang::class, 'id_barang');
    }

    public function pesanan ()
    {
        return $this->belongsTo(Pesanan::class, 'id_pesanan');
    }
}
