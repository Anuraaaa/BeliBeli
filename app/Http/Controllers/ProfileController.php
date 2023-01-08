<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use RealRashid\SweetAlert\Facades\Alert;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function edit()
    {
        return Inertia::render('Profile/Edit', [
            'title' => 'Profile'
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'email' => 'required'
        ]);

        User::where('id', Auth::user()->id)->update([
            'username' => $request->username,
            'email' => $request->email
        ]);

        Alert::success('Sukses', 'Kamu berhasil memperbarui profile');
        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
