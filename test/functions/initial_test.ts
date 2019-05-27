describe("Initial handler", () => {
  let wrapper: LambdaWrapper.WrappedAWSLambda;

  beforeAll(async () => {
    wrapper = await LambdaWrapper.getWrapper("initial");
  });

  it("responds successfully with a JSON message", async () => {
    const response = await wrapper.run();

    expect(response).toHaveProperty("statusCode", 200);
    expect(JSON.parse(response.body)).toHaveProperty(
      "message",
      "Your function executed successfully!"
    );
  });
});
