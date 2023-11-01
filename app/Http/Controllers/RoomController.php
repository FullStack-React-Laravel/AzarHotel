<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRoomRequest;
use App\Http\Requests\UpdateRoomRequest;
use App\Models\Room;
use App\Models\RoomCategory;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return Room::categories($request->categories)
            ->search($request->search)
            ->order($request->sort, $request->order)
            ->paginate();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRoomRequest $request)
    {
        $data = $request->validated();
        $data['category_id'] = RoomCategory::slug($data['category'])->id;

        Room::create($data);

        return ['status' => 'success'];
    }

    /**
     * Display the specified resource.
     */
    public function show(Room $room)
    {
        return $room;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRoomRequest $request, Room $room)
    {
        $data = $request->validated();

        $data['category_id'] = ($data['category'] != $room->category->slug ? RoomCategory::slug($data['category']) : $room->category)->id;

        $room->update($data);

        return ["status" => "success"];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Room $room)
    {
        $room->delete();

        return ["status" => "success"];
    }
}
