<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word,
            'price' => $this->faker->randomFloat(2, 10, 500),
            'discount' => $this->faker->numberBetween(0, 30),
            'description' => $this->faker->paragraph,
            'usage' => $this->faker->sentence,
            'stock' => $this->faker->numberBetween(1, 100),
            'minOrder' => $this->faker->numberBetween(1, 5),
            'category' => $this->faker->word,
        ];
    }
}
