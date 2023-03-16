import { UserRepository } from '../repository/UserRepository';
import { BusinessError } from '../error/BusinessError';
import { UserDTO } from '../dto/UserDTO';

export class FindUserByUsernameService {
    private repository = new UserRepository();

    public execute = async (username: string): Promise<UserDTO> => {
        const user = await this.repository.findByName(username);
        if (this.isUserNonPresent(user)) {
            throw new BusinessError(404, 'User not found');
        }
        return user as UserDTO;
    };

    private isUserNonPresent(user: any) {
        return !user;
    }
}
