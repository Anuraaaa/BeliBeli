<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pesanan extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_user',
        'tanggal_pesanan',
        'jumlah_harga',
        'status_pesanan'    
    ];
}
