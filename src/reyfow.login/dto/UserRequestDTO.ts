export class UserRequestDTO {
    private readonly _user: string;
    private readonly _password: string;
    private readonly _roles: string[];

    constructor(user: string, password: string, roles: string[]) {
        this._user = user;
        this._password = password;
        this._roles = roles;
    }

    get user(): string {
        return this._user;
    }

    get password(): string {
        return this._password;
    }

    get roles(): string[] {
        return this._roles;
    }
}
