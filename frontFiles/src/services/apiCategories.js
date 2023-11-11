import { METHOD, customFetch } from "../hooks/customFetch";

export class ApiCategory {
    static root = "rooms/categories";

    static async index() {
        return customFetch(`${ApiCategory.root}`);
    }

    static async show(slug) {
        return customFetch(`${ApiCategory.root}/${slug}`);
    }

    static async store(category) {
        return customFetch(ApiCategory.root, METHOD.POST, category);
    }

    static async update(slug, category) {
        return customFetch(
            `${ApiCategory.root}/${slug}`,
            METHOD.PATCH,
            category,
        );
    }

    static async destroy(slug) {
        return customFetch(`${ApiCategory.root}/${slug}`, METHOD.DELETE);
    }
}
