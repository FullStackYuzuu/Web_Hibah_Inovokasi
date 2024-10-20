<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Sales;
use Illuminate\Database\Eloquent\Factories\Factory;

class SalesFactory extends Factory
{
    protected $model = Sales::class;

    public function definition()
    {
        return [
            'product_id' => Product::factory(), // Relasi ke produk (jika ingin buat produk baru)
            'amount' => $this->faker->numberBetween(1, 10),
            'total_price' => $this->faker->randomFloat(2, 10000, 1000000),
            'sale_time' => $this->faker->dateTimeBetween('-1 year', 'now'),
        ];
    }
}
