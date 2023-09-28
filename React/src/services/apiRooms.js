export async function getRooms() {
    const res = await fetch("http://localhost:8000/api/rooms",
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // "X-CSRF-Token": document.querySelector('input[name=_token]').value
            },
        }
    );

    console.log(res);
    if (!res.ok) {
        throw new Error(`cant get rooms`);
    }
    const data = await res.json();
    console.log(data);
    return data;
}
