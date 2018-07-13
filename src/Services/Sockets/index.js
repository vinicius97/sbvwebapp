import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:3000')

export const subscribeToUploadStatus = (cb) => {
  socket.on('upload status', status => cb(status))
}