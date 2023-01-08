<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Barang extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_barang',
        'id_store',
        'harga',
        'stock',
        'keterangan',
        'image'
    ];

    public function PesananDetail() 
    {
        return $this->hasMany(PesananDetail::class, 'id_barang');
    }

    public function Store()
    {
        return $this->belongsTo(Stores::class, 'id_barang');
    }
}
