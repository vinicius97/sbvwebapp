import openSocket from 'socket.io-client'

const ENDPOINT = require('../../config').endpoint
const socket = openSocket(ENDPOINT)

export const subscribeToUploadStatus = (key, cb) => {
  socket.on('upload status '+key, status => {
    cb({key, status})
  })
}