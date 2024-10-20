<?php

// app/Models/ProductImage.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'image_path',
    ];

    // Relasi dengan Product (satu gambar dimiliki oleh satu produk)
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
