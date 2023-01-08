<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class PasswordController extends Controller
{
    /**
     * Update the user's password.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request)
    {
        $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => 'required_with:password_confirmation|same:password_confirmation|confirmed|min:5|max:255',
            'password_confirmation' => 'required|min:5|max:255'
        ]);

        User::where('id', Auth::user()->id)->update([
            'password' => Hash::make($request->password),
        ]);

        return back();
    }
}
