/*****************************************************************
 * Method      |  URL          | Action    |  Description        *
 *****************************************************************
 *  GET        |  /rooms       |  index    |  get all data       *
 *  POST       |  /rooms       |  store    |  add new room       *
 *  GET	       |  /rooms/{Id}  |  show     |  get specific room  *
 *  PUT/PATCH  |  /rooms/{Id}  |  update   |  update room        *
 *  DELETE     |  /rooms/{Id}  |  destroy  |  delete room        *
 *****************************************************************/

/**
 * - please send data when store and update actions
 * - data get => room('id','code','type','price','capacity')
 * - data set => room('code','type','price','capacity')
 */

export async function getRooms() {
    const res = await fetch("http://localhost:8000/api/rooms", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            // "X-CSRF-Token": document.querySelector('input[name=_token]').value
        },
    });

    if (!res.ok) {
        throw new Error(`cant get rooms`);
    }
    const data = await res.json();

    return data;
}

export async function deletingRoomApi(roomId) {
    const res = await fetch(`http://localhost:8000/api/rooms/${roomId}`, {
        method: "DELETE",
    });

    if (!res.ok) {
        throw new Error(`cant delete room`);
    }
    const data = await res.json();

    return data;
}

export async function addNewRoomApi(newRoom) {
    console.log(JSON.stringify(newRoom));
    const res = await fetch(`http://localhost:8000/api/rooms`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",

            // "X-CSRF-Token": document.querySelector('input[name=_token]').value
        },
        body: JSON.stringify(newRoom),
    });

    if (!res.ok) {
        throw new Error(`cant Add new room`);
    }
    const data = await res.json();

    return data;
}

export async function editRoomApi(id, room) {
    console.log(JSON.stringify(room), id);
    return;
    // const res = await fetch(`http://localhost:8000/api/rooms`, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json",

    //         // "X-CSRF-Token": document.querySelector('input[name=_token]').value
    //     },
    //     body: JSON.stringify(newRoom),
    // });

    // if (!res.ok) {
    //     throw new Error(`cant Add new room`);
    // }
    // const data = await res.json();

    // return data;
}
