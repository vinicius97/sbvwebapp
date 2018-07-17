import openSocket from 'socket.io-client'

const ENDPOINT = 'http://35.199.76.90:8080'
const socket = openSocket(ENDPOINT)

export const subscribeToUploadStatus = (key, cb) => {
  socket.on('upload status '+key, status => {
    cb({key, status})
  })
}