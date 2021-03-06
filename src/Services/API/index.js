import axios from 'axios'

const ENDPOINT = require('../../config').endpoint

export const uploadVideo = async ({ file, title, key }) => {
  try {
    const data = new FormData();
    data.append('title', title)
    data.append('key', key)
    data.append('video', file)

    return await axios.post(`${ENDPOINT}/video/upload`, data)
      .then(function (response) {
        return response.data
      })
      .catch(function (e) {
        return null
      })
  } catch (e) {
    return null
  }
}

export const encodeVideo = async (data) => {
  try {
    return await axios.post(`${ENDPOINT}/video/encode`, data)
      .then(function (response) {
        return response.data
      })
      .catch(function (e) {
        return null
      })
  } catch (e) {
    return null
  }
}

export const listVideos = async (file, title) => {
  try {
    return await axios.get(`${ENDPOINT}/video/list`)
      .then(function (response) {
        return response.data
      })
      .catch(function (e) {
        console.log(e);
      })
  } catch (e) {
    console.log(e)
  }
}

export const getVideo = async ({videoId}) => {
  try {
    return await axios.get(`${ENDPOINT}/video/${videoId}`)
      .then(function (response) {
        return response.data[0]
      })
      .catch(function (e) {
        console.log(e);
      })
  } catch (e) {
    console.log(e)
  }
}