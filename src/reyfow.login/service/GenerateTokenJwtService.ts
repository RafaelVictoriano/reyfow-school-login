import { sign } from 'jsonwebtoken';

export class GenerateTokenJwtService {
    public generate = (username: string): string => {
        return sign({}, 'zdtlD3JK56m6wTTgsNFhqzjqP512lm2123113513nlm15161515', {
            subject: username,
            expiresIn: '48h',
        });
    };
}
