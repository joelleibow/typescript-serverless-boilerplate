import "source-map-support/register";

import { APIGatewayProxyHandler } from "aws-lambda";

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    body: JSON.stringify(
      {
        input: event,
        message:
          "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!"
      },
      null,
      2
    ),
    statusCode: 200
  };
};
