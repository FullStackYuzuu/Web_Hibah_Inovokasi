<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sales extends Model
{
    use HasFactory;

    protected $fillable = [
        'phone_number',
        'product_id',
        'amount',
        'total_price',
        'sale_time',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
    protected $casts = [
        'sale_time' => 'datetime',
    ];
}
