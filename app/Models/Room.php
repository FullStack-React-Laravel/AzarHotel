<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'room_number',
        'type',
        'price',
        'capacity'
    ];

    public function scopeTypesFilter($query, $types)
    {
        if ($types == 'all') return;
        $query->whereIn('type', explode('-', $types));
    }

    public function scopeSearch($query, $search)
    {
        $query->where(
            fn ($query) => $query
                ->where('room_number', 'like', "%$search%")
                ->orWhere('type', 'like', "%$search%")
                ->orWhere('price', $search)
                ->orWhere('capacity', $search)
        );
    }

    public function scopeSortFilter($query, $sort, $order)
    {
        $query->orderBy(
            in_array($sort, $this->fillable) ? $sort : 'Id',
            in_array($order, ['asc', 'desc']) ? $order : 'asc'
        );
    }
}
