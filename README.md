# typescript-serverless-boilerplate

This repository aims to provide a foundation to build upon for creating [AWS Lambda(s)](https://aws.amazon.com/lambda/) using [serverless](https://serverless.com/) and [TypeScript](https://www.typescriptlang.org/). It was initially generated using:

`serverless create --template aws-nodejs-typescript`

and modified to an opinionated package structure, TypeScript options, and Jest testing.

## Getting Started

It's assumed you have forked this repository and are running macOS with [Homebrew](https://brew.sh/).

1. Install `nvm` - [Node Version Manager](https://github.com/nvm-sh/nvm)

`brew install nvm`

2. Install the lts version of Node.js (the `.nvmrc` is currently 10.15.3)

`nvm install --lts`

2. Install `serverless` as a global npm package (It's just easier that way)

`npm install serverless -g`

3. Within the repository directory, install the dependencies

`npm install`

You're now up and running. To verify, start by running the tests.

`npm test`

You should see output similar to below:

```
PASS  test/functions/hello_test.ts
  hello
    ✓ should return Serverless boilerplate message (4ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.652s, estimated 2s
Ran all test suites.
```

You can also invoke the initial [AWS Lambda(s)](https://aws.amazon.com/lambda/)

`sls invoke local -f hello`

This will result in output similar to below:

```
Serverless: Bundling with Webpack...
Time: 1748ms
Built at: 07/27/2019 2:33:07 PM
                     Asset     Size               Chunks             Chunk Names
    lib/functions/hello.js  130 KiB  lib/functions/hello  [emitted]  lib/functions/hello
lib/functions/hello.js.map  147 KiB  lib/functions/hello  [emitted]  lib/functions/hello
Entrypoint lib/functions/hello = lib/functions/hello.js lib/functions/hello.js.map
[./lib/functions/hello.ts] 314 bytes {lib/functions/hello} [built]
[./node_modules/buffer-from/index.js] 1.56 KiB {lib/functions/hello} [built]
[./node_modules/source-map-support/register.js] 25 bytes {lib/functions/hello} [built]
[./node_modules/source-map-support/source-map-support.js] 17.7 KiB {lib/functions/hello} [built]
[./node_modules/source-map/lib/array-set.js] 3.12 KiB {lib/functions/hello} [built]
[./node_modules/source-map/lib/base64-vlq.js] 4.6 KiB {lib/functions/hello} [built]
[./node_modules/source-map/lib/binary-search.js] 4.15 KiB {lib/functions/hello} [built]
[./node_modules/source-map/lib/mapping-list.js] 2.28 KiB {lib/functions/hello} [built]
[./node_modules/source-map/lib/source-map-consumer.js] 39.6 KiB {lib/functions/hello} [built]
[./node_modules/source-map/lib/source-map-generator.js] 14 KiB {lib/functions/hello} [built]
[./node_modules/source-map/lib/source-node.js] 13.5 KiB {lib/functions/hello} [built]
[./node_modules/source-map/source-map.js] 405 bytes {lib/functions/hello} [built]
[fs] external "fs" 42 bytes {lib/functions/hello} [optional] [built]
[module] external "module" 42 bytes {lib/functions/hello} [optional] [built]
[path] external "path" 42 bytes {lib/functions/hello} [built]
    + 3 hidden modules
{
    "body": "{\n  \"input\": \"\",\n  \"message\": \"Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!\"\n}",
    "statusCode": 200
}
```

`serverless-offline` is included to improve the local development experience. Running `sls offline` will host your AWS Lambda(s) locally at [http://localhost:3000](http://localhost:3000)

All functionality provided by [the dependencies within this repository](#built-with) are available as expected.

## Built With

- [serverless](https://serverless.com/framework/docs/providers/aws/guide/)
- [serverless-offline](https://github.com/dherault/serverless-offline)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
