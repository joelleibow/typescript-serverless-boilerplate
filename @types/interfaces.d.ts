/// <reference types="aws-lambda" />

declare namespace LambdaWrapper {
  function getWrapper(serverlessFunctionName: string): WrappedAWSLambda;

  class WrappedAWSLambda {
    public run(): Promise<AWSLambda.APIGatewayProxyResult>;
  }
}
