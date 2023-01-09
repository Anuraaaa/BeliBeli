<?php

namespace App\Http\Controllers;

use App\Models\Stores;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StoresController extends Controller
{
    public function addstore(Request $request)
    {
        if (Auth::check())
        {
            $request->validate(['storename' => 'required']);
    
            Stores::create([
                'nama_store' => $request->storename,
                'id_user' => Auth::user()->id
            ]);
            return redirect('/profile');
        }
    }    
    public function editstore(Request $request)
    {
        if (Auth::check())
        {
            $request->validate(['storename' => 'required']);
    
            Stores::where('id_user', Auth::user()->id)->update([
                'nama_store' => $request->storename
            ]);
            return redirect('/profile');
        }
    }    
    public function destroystore()
    {
        if (Auth::check())
        {
            Stores::where('id_user', Auth::user()->id)->delete();
            return redirect('/profile');            
        }
    }
}
