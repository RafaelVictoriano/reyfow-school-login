import { clientDynamoDb } from '../config/DynamoDBConfig';

export class UserRepository {
    public findByName = async (name: string) => {
        const dynamoDbClient = await clientDynamoDb();

        const data = await dynamoDbClient
            .get({
                TableName: 'user',
                Key: {
                    username: name,
                },
            })
            .promise();
        return data.Item;
    };
}
