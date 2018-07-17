const URL_ENDPOINT = 'http://35.199.76.90:8080'
const ENDPOINTS = {
  LIST: `${URL_ENDPOINT}/video/list`,
  VIDEO: `${URL_ENDPOINT}/video/`
}

const videoMock = {
  "status":"Encodando",
  "_id":"2",
  "title":"Video",
  "filename":"video.mp4",
  "key":"video.mp4",
  "url":"http://videos.com/video.mp4",
  "input":"video.dv",
  "__v":0,
  "output_id":"",
  "encode_id":""
}

export default {
  get: jest.fn((url) => {
    switch (url) {
      case ENDPOINTS.LIST:
        return Promise.resolve({
          data: [videoMock]
        })
      case ENDPOINTS.VIDEO:
        return Promise.resolve({
          data: videoMock
        })
      default:
        return Promise.resolve({
          data: {}
        })
    }
  }),
  post: jest.fn(() => Promise.resolve({ data: {} }))
}