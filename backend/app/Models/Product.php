<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
protected $fillable = [ // Allow mass assignment
    'category_id',
    'name',
    'description',
    'technical_specifications',
    'price',
    'image',
    'is_featured',
];

public function category()
{
    return $this->belongsTo(Category::class);
}
}
