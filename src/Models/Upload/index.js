import { encodeVideo, uploadVideo } from '../../Services/API'
import { subscribeToUploadStatus } from '../../Services/Sockets'

const initState = {
  status: [],
}

export const upload = {
  state: initState,
  reducers: {
    setStatus(state, payload) {
      return {...state, status: payload}
    }
  },
  effects: (dispatch) => ({
    async uploadFile ({file, title}, rootState) {
      try {

        this.setStatus('Enviando')
        subscribeToUploadStatus((status) => this.setStatus(status))

        const uploadResult = await uploadVideo({file, title})
        const fileInfo = uploadResult.data
        await encodeVideo(fileInfo)

      } catch (e) {
        this.setStatus('Falha')
        console.log(e)
      }
    }
  })
}