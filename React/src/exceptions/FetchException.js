export default class DangerousWaterCurrent extends Error {
    errors = [];

    constructor(msg, errors) {
        super(msg);
        this.errors = errors;
    }

    static throw(promise) {
        throw new this(promise.message, promise.errors);
    }
}