import { METHOD, customFetch } from "../hooks/customFetch";

export class ApiRoom {
    static root = "rooms";

    static async index(args = {}) {
        const string_args = Object.keys(args)
            .map((key) => `${key}=${args[key]}`)
            .reduce((carry, value) => `${carry}&${value}`);

        return customFetch(`${ApiRoom.root}?${string_args}`);
    }

    static async show(room_number) {
        return customFetch(`${ApiRoom.root}/${room_number}`);
    }

    static async store(room) {
        return customFetch(ApiRoom.root, METHOD.POST, room);
    }

    static async update(room_number, room) {
        return customFetch(
            `${ApiRoom.root}/${room_number}`,
            METHOD.PATCH,
            room,
        );
    }

    static async destroy(room_number) {
        return customFetch(`${ApiRoom.root}/${room_number}`, METHOD.DELETE);
    }
}
