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

    console.log(res);
    if (!res.ok) {
        throw new Error(`cant get rooms`);
    }
    const data = await res.json();

    return data;
}

export async function deletingRoomApi(roomId) {
    console.log(roomId);
    const res = await fetch(`http://localhost:8000/api/rooms/${roomId}`, {
        method: "DELETE",
        // headers: {
        //     "Content-Type": "application/json",
        //     Accept: "application/json",
        //     // "X-CSRF-Token": document.querySelector('input[name=_token]').value
        // },
    });

    console.log(res);
    if (!res.ok) {
        throw new Error(`cant delete room`);
    }
    const data = await res.json();
    console.log(data);
    return data;
}
