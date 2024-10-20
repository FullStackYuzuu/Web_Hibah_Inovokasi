<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SalesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'product' => [
                'id' => $this->product->id,
                'name' => $this->product->name,
                'price' => $this->product->price, // Sertakan harga produk
                'discount' => $this->product->discount, // Sertakan diskon produk
            ],
            'amount' => $this->amount,
            'total_price' => $this->total_price,
            'sale_time' => $this->sale_time,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
