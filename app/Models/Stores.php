<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Stores extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_store',
        'id_user'
    ];
}
