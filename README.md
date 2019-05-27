# typescript-serverless-boilerplate

This repository aims to provide a foundation to build upon for creating [AWS Lambda(s)](https://aws.amazon.com/lambda/) using [serverless](https://serverless.com/) and [TypeScript](https://www.typescriptlang.org/).

## Getting Started

It's assumed you have forked this repository and are running macOS with [Homebrew](https://brew.sh/).

1. Install `nvm` - [Node Version Manager](https://github.com/nvm-sh/nvm)

`brew install nvm`

2. Install the lts version of Node.js (the `.nvmrc` is currently 10.15.3)

`nvm install --lts`

3. Within the repository directory, install the dependencies

`npm install`

You're now up and running. To verify, start by running the tests.

`npm test`

You should see output similar to below:

```
PASS  test/functions/initial_test.ts
  Initial handler
    ✓ responds successfully with a JSON message (4ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.863s, estimated 2s
Ran all test suites.
```

You can also invoke the initial [AWS Lambda(s)](https://aws.amazon.com/lambda/)

`./node_modules/.bin/serverless invoke local --function initial`

This will result in output similar to below:

```
Serverless: Bundling with Webpack...
Time: 1723ms
Built at: 05/26/2019 5:21:15 PM
                       Asset      Size                 Chunks             Chunk Names
    lib/functions/initial.js  4.24 KiB  lib/functions/initial  [emitted]  lib/functions/initial
lib/functions/initial.js.map  4.02 KiB  lib/functions/initial  [emitted]  lib/functions/initial
Entrypoint lib/functions/initial = lib/functions/initial.js lib/functions/initial.js.map
[./lib/functions/initial.ts] 185 bytes {lib/functions/initial} [built]
{
    "body": "{\"message\":\"Your function executed successfully!\"}",
    "statusCode": 200
}
```

All functionality provided by [the dependencies within this repository](#built-with) are available as expected.

## Built With

- [serverless](https://serverless.com/framework/docs/providers/aws/guide/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
