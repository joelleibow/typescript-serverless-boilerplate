import { APIGatewayProxyHandler } from "aws-lambda";

export const hello: APIGatewayProxyHandler = async () => {
  return {
    body: JSON.stringify({
      message: "Your function executed successfully!"
    }),
    statusCode: 200
  };
};
