<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRoomRequest;
use App\Http\Requests\UpdateRoomRequest;
use App\Models\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //! TODO: when make paginate replace get() method to paginate() method
        return Room::sortFilter($request->sort, $request->order)
            ->when($request->has('types'), fn ($query) => $query->typesFilter($request->types))
            ->when($request->has('search'), fn ($query) => $query->search($request->search))
            ->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRoomRequest $request)
    {
        $room = $request->validated();

        Room::create($room);

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

        $room->room_number = $data['room_number'];
        $room->type = $data['type'];
        $room->price = $data['price'];
        $room->capacity = $data['capacity'];

        $room->save();

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
