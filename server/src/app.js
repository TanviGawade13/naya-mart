import express from 'express'
import mongoose from 'mongoose'

const app = express()

app.use(express.json())

app.get('/api/health', (_request, response) => {
  const databaseStates = ['disconnected', 'connected', 'connecting', 'disconnecting']

  response.json({
    status: 'ok',
    service: 'nayamart-api',
    database: {
      state: databaseStates[mongoose.connection.readyState],
      configured: Boolean(process.env.MONGODB_URI),
    },
    timestamp: new Date().toISOString(),
  })
})

export default app
