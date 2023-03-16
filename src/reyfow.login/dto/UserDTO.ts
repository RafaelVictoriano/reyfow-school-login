export class UserDTO {
    private readonly _username: string;
    private readonly _password: string;
    private readonly _role: string;

    constructor(user: string, password: string, role: string) {
        this._username = user;
        this._password = password;
        this._role = role;
    }

    get username(): string {
        return this._username;
    }

    get password(): string {
        return this._password;
    }

    get role(): string {
        return this._role;
    }
}
