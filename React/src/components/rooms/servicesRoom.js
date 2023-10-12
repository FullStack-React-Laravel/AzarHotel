function common(v) {
    console.log(v);
    if (v === "") return "please this field is required";
    else if (v.startsWith(" ")) return "please remove space from the begining";
    else if (v.endsWith(" ")) return "please remove space from the end";
    else return false;
}
// --------------------------------
export function validateNumber(v) {
    if (common(v)) return common(v);
    else if (v.length > 4)
        return "Please the length of room number must equal 4";
    else if (!/^[A-Z]\d{3}$/.test(v))
        return "Please the room number must start with capital letter and 3 digits like A001";
    else return true;
}
// --------------------------------

export function validateType(v) {
    if (common(v)) return common(v);
    else if (!/^(silver|gold|diamond)$/i.test(v))
        return "Please note that this field only accepts 'silver,' 'gold,' and 'diamond'";
    else return true;
}
// --------------------------------

export function validateCapacity(v) {
    if (common(v)) return common(v);
    else if (!/^\d+$/gi.test(v))
        return "Please note that this field only accepts positive integer numbers from 1 To 10";
    else if (Number(v) > 10) return "Please enter number <= 10";
    else return true;
}
// --------------------------------

export function validatePrice(v) {
    if (common(v)) return common(v);
    else if (!/^\d+\.?\d+$/.test(v))
        return "Please note that this field only accepts positive numbers";
    else if (/^\d+\.$/.test(v)) return "please remove . from the end";
    else if (Number(v) < 1000)
        return "please the min price in Azar hotel is 1000";
    else if (Number(v) > 40000) {
        return "please the max price in Azar hotel is 40000";
    } else return true;
}
// --------------------------------
