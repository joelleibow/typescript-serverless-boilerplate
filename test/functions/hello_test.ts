import { APIGatewayProxyResult } from "aws-lambda";

import { hello } from "../../lib/functions/hello";

describe("hello", () => {
  it("should return Serverless boilerplate message", async () => {
    const result = await hello(null, null, null);

    expect(result).toHaveProperty("statusCode", 200);
    expect(JSON.parse((result as APIGatewayProxyResult).body)).toHaveProperty(
      "message",
      "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!"
    );
  });
});
