<?php

namespace Database\Seeders;

use App\Models\Settings;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Seed nomor WhatsApp
        Settings::create([
            'key' => 'whatsapp_number',
            'value' => '6285159320043', // Nomor WhatsApp default
        ]);

        // Seed email
        Settings::create([
            'key' => 'email',
            'value' => 'contact@example.com', // Email default
        ]);

        // Seed TikTok
        Settings::create([
            'key' => 'tiktok',
            'value' => 'https://www.tiktok.com/@your_account', // URL TikTok default
        ]);

        // Seed Instagram
        Settings::create([
            'key' => 'instagram',
            'value' => 'https://www.instagram.com/your_account', // URL Instagram default
        ]);

        // Seed Shopee
        Settings::create([
            'key' => 'shopee',
            'value' => 'https://shopee.co.id/your_store', // URL Shopee default
        ]);

        // Seed Tokopedia
        Settings::create([
            'key' => 'tokopedia',
            'value' => 'https://www.tokopedia.com/your_store', // URL Tokopedia default
        ]);

        Settings::create([
            'key' => 'facebook',
            'value' => 'https://www.facebook.com/your_store', // URL Tokopedia default
        ]);
    }
}
