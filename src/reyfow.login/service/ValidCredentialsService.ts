import { FindUserByUsernameService } from './FindUserService';
import { IUserResponseDTO } from '../dto/IUserResponseDTO';
import { BusinessError } from '../error/BusinessError';
import { BasicAuthResult, parse } from 'basic-auth';
import { compare } from 'bcryptjs';

export class GetCredentialsService {
    private findUserByUsernameService = new FindUserByUsernameService();

    public execute = async (token: string | undefined): Promise<IUserResponseDTO> => {
        if (!token) {
            throw new BusinessError(401, 'Missing Authorization Header');
        }
        const { name, pass } = parse(token) as BasicAuthResult;
        const user = await this.findUserByUsernameService.execute(name);
        const isPasswordsNotMatch = !(await compare(pass, user.password));

        if (isPasswordsNotMatch) {
            throw new BusinessError(401, 'Password or email is invalid');
        }
        return { username: user.username, role: user.role };
    };
}
