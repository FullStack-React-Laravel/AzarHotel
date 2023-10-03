// validate room number
export function validateRoomNumber(value) {
    if (value === "") return "please this field is required";
    else if (value.length > 4)
        return "please the length of room number must equal 4";
    else if (!/^A\d{3}$/.test(value))
        return "please the room number must start with A and 3 digits like A001";
    else return true;
}

export function validateType() {}
export function validateCapacity() {}
export function validatePrice() {}
