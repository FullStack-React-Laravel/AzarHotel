<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRoomCategoryRequest;
use App\Http\Requests\UpdateRoomCategoryRequest;
use App\Models\RoomCategory;

class RoomCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return RoomCategory::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRoomCategoryRequest $request)
    {
        RoomCategory::create($request->validated());

        return ['status' => 'success'];
    }

    /**
     * Display the specified resource.
     */
    public function show(RoomCategory $roomCategory)
    {
        return $roomCategory;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRoomCategoryRequest $request, RoomCategory $roomCategory)
    {
        $roomCategory->update($request->validated());

        return ['status' => 'success'];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(RoomCategory $roomCategory)
    {
        $roomCategory->delete();

        return ['status' => 'success'];
    }
}
