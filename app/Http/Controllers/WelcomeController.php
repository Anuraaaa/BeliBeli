<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index ()
    {
        $barangs = Barang::paginate(5);
        return Inertia::render('Welcome', [
            'title' => 'Home', 
            'isUser' => 'guest',
            'barangs' => $barangs
        ]);
    }
}
