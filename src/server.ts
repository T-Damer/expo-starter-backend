import 'module-alias/register'
import 'source-map-support/register'
import 'reflect-metadata'

import runApp from '@/helpers/runApp'
import prismaClient from '@/helpers/prismaClient'

void (async () => {
  console.log('starting server')
  await runApp()
})()
  .then(async () => await prismaClient.$disconnect())
  .catch((e) => {
    console.error(e)
    prismaClient.$disconnect
    process.exit(1)
  })
