/**
 * Module dependencies.
 */

import app from '../app.js'
import debugLib from 'debug'
import http from 'http'
const debug = debugLib('node-express-es6:server')
import { exit } from 'node:process'
import { Server } from 'socket.io'
// 導入dotenv 使用 .env 檔案中的設定值 process.env
import 'dotenv/config.js'

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '6005')
app.set('port', port)

/**
 * Create HTTP server.
 */

var server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})
// socket.io 通信

io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`)

  socket.on('join_room', (data) => {
    socket.join(data)
    console.log(`User with ID: ${socket.id} joined room: ${data}`)
  })

  socket.on('send_message', (data) => {
    socket.to(data.room).emit('receive_message', data)
  })

  socket.on('disconnect', () => {
    console.log('User Disconnected', socket.id)
  })
  // 頻道分流
  socket.on('addroom',room =>{
    socket.join(room)
    socket.to(room).emit('addroom','已有新人加入聊天室!')
    io.sockets.in(room).emit('addroom','已加入聊天室')
  })
  socket.on('join_room', ({ room, username }) => {
    socket.join(room);
    console.log(`${username} joined room ${room}`);
    io.to(room).emit('message', `${username} has joined the room`);
  });
})

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      exit(1)
      break
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address()
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  debug('Listening on ' + bind)
}
