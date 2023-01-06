<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use App\Models\Barang;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(10)->create();
        Barang::factory(100)->create();

        \App\Models\User::factory()->create([
            'nama_lengkap' => "Muhammad Anwar Fauzan",
            'username' => "anwar",
            'email' => "admin@gmail.com",
            'password' => Hash::make('admin'), // password
            'type_user' => fake()->randomElement(['tamu', 'pembeli', 'penjual']),
            'remember_token' => Str::random(10),
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
