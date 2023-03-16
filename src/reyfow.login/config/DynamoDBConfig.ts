import { DynamoDB } from 'aws-sdk';

export const clientDynamoDb = async () => {
    const client = new DynamoDB.DocumentClient({ region: 'us-east-1' });
    console.log(`Dynamo db ${client}`);
    return client;
};
