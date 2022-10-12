export class UserDTO {
    private readonly _username: string;
    private readonly _password: string;
    private readonly _roles: string[];

    constructor(user: string, password: string, roles: string[]) {
        this._username = user;
        this._password = password;
        this._roles = roles;
    }

    get username(): string {
        return this._username;
    }

    get password(): string {
        return this._password;
    }

    get roles(): string[] {
        return this._roles;
    }
}
