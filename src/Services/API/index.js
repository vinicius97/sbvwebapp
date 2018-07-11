import axios from 'axios'

const ENDPOINT = 'http://localhost:3000'

export const uploadVideo = async (file) => {
  try {
    const data = new FormData();
    data.append('video', file)

    return await axios.post(`${ENDPOINT}/video/upload`, data)
      .then(function (response) {
        return response
      })
      .catch(function (e) {
        //console.log(e);
      })
  } catch (e) {
    //console.log(e)
  }
}