<?php

// app/Models/Product.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'discount',
        'description',
        'usage',
        'stock',
        'minOrder',
        'category',
    ];

    // Relasi dengan ProductImage (satu produk bisa memiliki banyak gambar)
    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }
}

