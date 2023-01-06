<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    public function index ()
    {
        if (Auth::check())
        {
            return Inertia::render('Checkout');

        }
        else
        {
            return redirect('/login');
        }
    }
}
