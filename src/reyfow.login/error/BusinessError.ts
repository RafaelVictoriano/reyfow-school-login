export class BusinessError extends Error {

    private readonly _statusCode: number;

    constructor(statusCode: number, message: string) {
        super(message);
        this._statusCode = statusCode;
    }

    get statusCode(): number {
        return this._statusCode;
    }
}