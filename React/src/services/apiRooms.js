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

// import FetchException from "../exceptions/FetchException";

const METHOD = {
    GET: "GET", // get data with actions (index, show)
    POST: "POST", // send data with actions (store)
    PUT: "PUT", // update data with actions (update)  -- Edit to data
    PATCH: "PATCH", // update data with actions (update)  -- Delete old data and insert new
    DELETE: "DELETE", // delete data with action (destroy)
};

const APP_LINK = "http://localhost:8000/api/rooms";

export async function customFetch(url, method = METHOD.GET, data = null) {
    const init = {
        method: method,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            // // "X-CSRF-Token": document.querySelector('input[name=_token]').value
        },
    };

    if (method !== METHOD.GET && data) init["body"] = JSON.stringify(data);

    const res = await fetch(url, init);
    const dataFromRes = await res.json();

    // if (!res.ok) FetchException.throw(dataFromRes);
    if (!res.ok) {
        throw new Error(dataFromRes.message);
    }
    return dataFromRes;
}

// TODO : create class name room control to all fetches and named it with naming convention like comment or stay with that approach, It's good enough.
//* index
export async function getRoomsApi(
    filterValue = null,
    sort,
    order,
    search,
    pag,
) {
    return customFetch(
        `${APP_LINK}?${filterValue}&sort=${sort}&order=${order}&page=${pag}&search=${search}`,
    );
}

//* show
export async function getRoom(roomId) {
    return customFetch(`${APP_LINK}/${roomId}`);
}

//* store
export async function addNewRoomApi(room) {
    return customFetch(APP_LINK, METHOD.POST, room);
}

//* update
export async function editRoomApi(room) {
    console.log(room);
    return customFetch(`${APP_LINK}/${room.id}`, METHOD.PATCH, room);
}

//* destroy
export async function deletingRoomApi(roomId) {
    return customFetch(`${APP_LINK}/${roomId}`, METHOD.DELETE);
}
