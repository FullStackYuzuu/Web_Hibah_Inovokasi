<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    protected $table = 'settings'; // Nama tabel

    protected $fillable = ['key', 'value']; // Kolom yang bisa diisi (mass assignable)

    public $timestamps = true; // Aktifkan timestamps jika ingin menggunakan created_at dan updated_at
}
