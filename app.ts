import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { GenerateTokenJwtService } from './src/reyfow.login/service/GenerateTokenJwtService';
import { GetCredentialsService } from './src/reyfow.login/service/ValidCredentialsService';

const getCredentialService = new GetCredentialsService();

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    let response: APIGatewayProxyResult;
    const token = event.headers.Authorization;

    try {
        console.log('Init function');
        const userResponseDTO = await getCredentialService.execute(token);
        const tokenJwt = new GenerateTokenJwtService().generate(userResponseDTO.username);

        response = {
            statusCode: 200,
            body: JSON.stringify(userResponseDTO),
            headers: {
                Authorization: 'Bearer ' + tokenJwt,
            },
        };
        console.log(`end function ${response}`);
    } catch (err: any) {
        console.log(err);
        response = await buildResponse(401, err.message);
    }
    return response;
};

const buildResponse = async (statusCode: number, body: any): Promise<APIGatewayProxyResult> => {
    return {
        statusCode,
        body: JSON.stringify(body),
    };
};
