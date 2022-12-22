<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function index(Request $request)
    {
        $token = $request->session()->token();
        $token = csrf_token();

        return Inertia::render('Register', ['title' => 'Register', 'token' => $token]);
    }

    public function store(Request $request)
    {
        //passing data props errors tidak butuh props custom session karena ada validate unique
        $validatedData = $request->validate([
            'fullname' => 'required|max:255',
            'username' => 'required|min:3|max:255|unique:users',
            'email' => 'required|email:dns|unique:users',
            'gender' => 'required|in:laki-laki,perempuan',
            'password' => 'required_with:repassword|same:repassword|min:5|max:255',
            'repassword' => 'required|min:5|max:255',
            'checkbox' => 'required'
        ]);

        $validatedData['password'] = Hash::make($validatedData['password']);

        User::create($validatedData);
        return Inertia::render('Login', ['title' => 'Login', 'success' => 'Registration successfull! Please login']); //passing data props custom session
    }
}
