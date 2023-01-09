<?php

namespace App\Http\Controllers;

use App\Models\Pesanan;
use App\Models\PesananDetail;
use App\Models\Stores;
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
        if (Auth::check())
        {
            $pesanan_user = Pesanan::where('id_user', Auth::user()->id)->first();
            $store_user = Stores::where('id_user', Auth::user()->id)->first();
            if (!empty($pesanan_user))
            {            
                $pesanan_detail = PesananDetail::where('id_pesanan', $pesanan_user->id_pesanan)->get();
                if (!empty($pesanan_detail))
                {
                    return Inertia::render('Profile/Edit', [
                        'title' => 'Profile',
                        'pesananCount' => $pesanan_detail->count(),
                        'store' => empty($store_user) ? 0: $store_user 
                    ]);
                }
                else
                {
                    return Inertia::render('Profile/Edit', [
                        'title' => 'Profile',
                        'pesananCount' => 0,
                        'store' => empty($store_user) ? 0: $store_user 
                    ]);                
                }
            }
            return Inertia::render('Profile/Edit', [
                'title' => 'Profile',
                'pesananCount' => 0,
                'store' => empty($store_user) ? 0: $store_user 
            ]);                
        }
    }

    public function update(Request $request)
    {
        if (Auth::check())
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
    }

    /**
     * Delete the user's account.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {
        if (Auth::check())
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
}
