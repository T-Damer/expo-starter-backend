import env from '@/helpers/env'
import { createServer, Server } from 'http'
import { createYoga } from 'graphql-yoga'
import { resolvers } from '@generated/type-graphql'
import { buildSchema } from 'type-graphql'
import path from 'path'

export default async function () {
  const schema = buildSchema({
    resolvers,
    validate: false,
    emitSchemaFile: path.resolve(__dirname, 'schema.graphql'),
  })

  const yoga = createYoga({
    schema,
  })

  const server = createServer(yoga.requestListener)

  return new Promise<Server>((resolve, reject) => {
    const connection = server
      .listen(env.SERVER_PORT)
      .on('listening', () => {
        console.log(`HTTP is listening on https://localhost:${env.SERVER_PORT}`)
        resolve(connection)
      })
      .on('error', reject)
  })
}
