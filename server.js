import express from 'express'
import { createServer } from 'http'
import { handler } from './build-node/handler.js'
import { log } from 'console'

const port = 3000
const app = express()
const server = createServer(app)

app.use('/uploads', express.static('uploads'))
app.use(handler)

server.listen(port,()=>{
    log("listening on port",port)
})