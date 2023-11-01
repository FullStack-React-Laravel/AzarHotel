<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    protected $fillable = [
        'number',
        'category_id',
    ];

    protected $with = ['category'];

    protected $hidden = [
        'id',
        'category_id',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function getRouteKeyName()
    {
        return 'number';
    }

    public function category()
    {
        return $this->belongsTo(RoomCategory::class);
    }

    public function scopeCategories($query, $categories)
    {
        $query->when($categories && $categories != 'all', fn ($query) => $query->whereHas(
            'category',
            fn ($query) => $query->whereIn('name', explode('-', $categories))
        ));
    }

    public function scopeSearch($query, $search)
    {
        $query->when($search, fn ($query) => $query->where(
            fn ($query) => $query->where('number', 'like', "%$search%")->orWhereHas(
                'category',
                fn ($query) => $query->where('name', 'like', "%$search%")
            )
        ));
    }

    public function scopeOrder($query, $sort, $order)
    {
        $arg_sort = $sort != 'category' ? $sort : RoomCategory::select('name')->whereColumn('rooms.category_id', 'room_categories.id');

        $query->orderBy($arg_sort ?? 'id', $order != 'desc' ? 'asc' : 'desc');
    }
}
