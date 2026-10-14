import 'dotenv/config'
import app from './app.js'
import { connectDatabase } from './database.js'

const port = Number(process.env.PORT) || 5000

async function startServer() {
  if (process.env.MONGODB_URI) {
    await connectDatabase(process.env.MONGODB_URI)
  } else {
    console.warn('MONGODB_URI is not set; starting without a database connection.')
  }

  app.listen(port, () => {
    console.log(`NayaMart API listening on http://localhost:${port}`)
  })
}

startServer().catch((error) => {
  console.error('Unable to start the API:', error)
  process.exitCode = 1
})
