<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function index(Request $request)
    {
        $token = $request->session()->token();
        $token = csrf_token();
        return Inertia::render('Login', ['title' => 'Login', 'token' => $token]);
    }

    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (Auth::attempt($credentials))
        {
            return Inertia::render('Welcome', ['title' => 'Home']);
        }
        return Inertia::render('Login', ['title' => 'Login', 'error', 'Login Error!']);
    }
}
