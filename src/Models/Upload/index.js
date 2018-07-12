import { encodeVideo, uploadVideo } from '../../Services/API'

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
    async uploadFile (payload, rootState) {
      try {
        this.setStatus('Enviando')
        const uploadResult = await uploadVideo(payload)
        const fileInfo = uploadResult.data

        this.setStatus(fileInfo ? 'Encodando' : 'Falha ao enviar vídeo')
        const encodeResult = await encodeVideo(fileInfo)

        this.setStatus(encodeResult ? 'Finalizado' : 'Falha ao converter vídeo')

      } catch (e) {
        this.setStatus('Falha')
        console.log(e)
      }
    }
  })
}