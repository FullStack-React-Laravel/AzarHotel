<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class RoomCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image',
        'description',
        'price',
        'capacity',
        'discount',
    ];

    protected $hidden = [
        'id',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function name(): Attribute
    {
        return Attribute::make(set: fn ($value)  => ['name' => $value, 'slug' => Str::slug($value)]);
    }

    public function rooms()
    {
        return $this->hasMany(Room::class);
    }

    public function scopeSlug($query, string $slug): static
    {
        return $query->where('slug', $slug)->first();
    }
}
