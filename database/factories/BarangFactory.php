<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class BarangFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'nama_barang' => fake()->randomElement(['Baju', 'Celana', 'Sepatu', 'Sendal', 'Topi', 'Kaos Kaki', 'Kalung', 'Gelang', 'Tas']),
            'id_store' => fake()->randomNumber(),
            'harga' => fake()->randomNumber(),
            'stock' => fake()->randomNumber(),
            'keterangan' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sequi dolores quibusdam debitis provident asperiores quaerat tempore, reiciendis quidem alias. Tempora esse quasi quidem.'
        ];
    }
}
