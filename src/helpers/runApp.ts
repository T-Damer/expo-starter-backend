import env from '@/helpers/env'
import { createServer, Server } from 'http'
import { createYoga } from 'graphql-yoga'
import { resolvers } from '@generated/type-graphql'
import { buildSchema } from 'type-graphql'
import path from 'path'
import prismaClient from './prismaClient'

export default async function () {
  const schema = buildSchema({
    resolvers,
    validate: false,
    emitSchemaFile: path.resolve(__dirname, 'schema.graphql'),
  })

  const yoga = createYoga({
    context: { prisma: prismaClient },
    schema,
  })

  const server = createServer(yoga.requestListener)

  server.listen(env.SERVER_PORT)
  console.log('Listening on http://localhost:', env.SERVER_PORT)
}
