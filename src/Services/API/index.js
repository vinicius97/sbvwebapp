import axios from 'axios'

const ENDPOINT = 'http://localhost:3000'

export const uploadVideo = async ({file, title}) => {
  try {
    const data = new FormData();
    data.append('video', file)
    data.append('title', title)

    return await axios.post(`${ENDPOINT}/video/upload`, data)
      .then(function (response) {
        return response
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
        return response
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