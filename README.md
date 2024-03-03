# GraphQL Backend starter code

This repository is to be used as a starter for GraphQL based Node.js applications written in TypeScript and using PostgreSQL

I plan to implement authentication, administration, posting and integration with `expo-starter` frontend

info: [how to migrate prisma data when changing schema](https://stackoverflow.com/questions/70774184/how-to-run-prisma-schema-update-without-erasing-the-postgresql-data)

## Installation and local launch

0. Install and start [PostgreSQL](https://formulae.brew.sh/formula/postgresql@16)
1. Clone this repo: `git clone https://github.com/Borodutch/backend-starter`
2. Create `.env` with the environment variables listed below
3. Run `yarn` in the root folder
4. Run `yarn start`

And you should be good to go! Feel free to fork and submit pull requests.

## Environment variables

| Name          | Description                                       |
| ------------- | ------------------------------------------------- |
| `DB_URL`      | URL of the mongo database                         |
| `SERVER_PORT` | Optional, defaults to 1337. Port to run server on |

Also, please, consider looking at `.env.sample`.

# How to add your stuff:

1. All database stuff is stored in the `schema.prisma`
2. You can use any database you want, simply modify the `provider` in `schema.prisma` field (watch out, it may cause some bugs)
3. To add more
