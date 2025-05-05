# Typescript Typeorm Backend

## App structure

-   Resolvers: Map graphql endpoint info to what logic needs.
-   Services: Contain the business logic.
-   Repositories: logic to access the database.
-   Entities: Model classes.

-   Normal flow: Resolver -> Service -> Repository

\*\* All entities classes must be in an `entities` folder, so they are detected by migrations.

\*\* All entities classes must inherit from BaseEntity (`src/common/BaseEntity.ts`).

\*\* All resolvers classes must be in a `resolvers` folder and imported into `src/graphql/graphqlSchema.ts`.

\*\* All db operations should be in repositories. All reusable operations should be in query sets.

## Stack

-   [TypeScript](https://www.typescriptlang.org) as the language
-   [TypeORM](https://typeorm.io/#/) as the database ORM
-   [TypeDi](https://github.com/typestack/typedi) as dependency injection container
-   [Apollo](https://www.apollographql.com/docs/) as the graphql server
-   [Type-graphql](https://typegraphql.com/) as the graphql library
-   [Typegoose](https://typegoose.github.io/typegoose/docs/guides/quick-start-guide) and [Mongoose](https://mongoosejs.com/) as MongoDB ORM
-   [Mocha](https://mochajs.org/) as testing framework
-   [Chai](https://www.chaijs.com/) as testing assert framework
-   [ESLint](https://eslint.org) as a linter
-   [Prettier](https://prettier.io) as a formatter
-   [Husky](https://typicode.github.io/husky) as the git hooks manager
-   [Git](https://git-scm.com) as the source control manager

## Documentation

[GraphQL schema](schema.gql)

-   To read docs locally: `npm run docs`

## Setup

-   Install node.js and npm, then run `npm install`
-   Run `husky install`
-   Install [Docker](https://docs.docker.com/engine/install/) and docker-compose
-   Run `docker-compose up` for the first time, then `docker-compose start` every time you start development
-   Env: `cp .env.example .env` and configure if necessary

## Development

-   Start local server: `npm start`
-   Run tests: `npm test` and `npm run test:mongo`
-   Run linter: `npm run lint`

### Migrations (SQL)

-   Create migrations: `npm run makemigrations` (<bold>Only use this when you modify the entities you need to generate the migrations</bold>)
-   Apply migrations: `npm run migrate`

## Scripts

To run custom scripts: `cross-env NODE_ENV=<local|dev|staging|production> ts-node src/scripts/<script>.ts <params>`

## Contributing

### Main branches

-   `main` (production environment).
-   `dev` (development environment).

All pull requests should be merged into `dev` branch.
