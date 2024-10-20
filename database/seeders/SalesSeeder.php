<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Sales;
use App\Models\Product;

class SalesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @param int $count
     */
    public function run() // Default 10 sales
    {
        // Buat $count sales data
        Sales::factory(20)->create()->each(function ($sale) {
            // Logika tambahan jika perlu, misalnya update produk terkait
        });
    }
}
