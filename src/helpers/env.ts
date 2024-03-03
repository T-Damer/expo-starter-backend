import * as dotenv from 'dotenv'
import { cleanEnv, num, str } from 'envalid'
import { cwd } from 'process'
import { resolve } from 'path'

dotenv.config({ path: resolve(cwd(), '.env') })

export default cleanEnv(process.env, {
  DB_URL: str(),
  SERVER_PORT: num({ default: 1337 }),
})
