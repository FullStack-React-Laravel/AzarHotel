export const METHOD = { GET: "GET", POST: "POST", PUT: "PUT", PATCH: "PATCH", DELETE: "DELETE" };

const APP_LINK = import.meta.env.VITE_BACKEND_URL;

export async function customFetch(url, method = METHOD.GET, data = null) {
    const init = {
        method: method,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    };

    if (method !== METHOD.GET && data) init["body"] = JSON.stringify(data);

    const res = await fetch(`${APP_LINK}/${url}`, init);
    const dataFromRes = await res.json();

    // if (!res.ok) FetchException.throw(dataFromRes);
    if (!res.ok) {
        throw new Error(dataFromRes.message);
    }

    return dataFromRes;
}
