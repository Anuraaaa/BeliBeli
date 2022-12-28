<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Barang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index(Request $request)
    {
        $token = $request->session()->token();
        $token = csrf_token();
        return Inertia::render('Login', [
            'title' => 'Login',
            'token' => $token, 
            'isUser' => 'tamu'
        ]);
    }

    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (Auth::attempt($credentials))
        {
            if (Auth::check())
            {
                $user = Auth::user();
                $barangs = Barang::paginate(5);
                return Inertia::render('Barang', [
                    'title' => 'Home', 
                    'isUser' => 'pembeli',
                    'barangs' => $barangs,
                    'dataUser' => $user->nama_lengkap
                ]);
            }

        }
        return Inertia::render('Login', [
            'title' => 'Login', 
            'error' =>'Login Error!',
            'isUser' => 'tamu'
        ]);
    }
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
