import { getVideo } from '../../Services/API'

const initState = {
  video: '',
}

export const player = {
  state: initState,
  reducers: {
    setVideo(state, payload) {
      return {...state, video: payload}
    }
  },
  effects: (dispatch) => ({
    async loadVideo ({videoId}, rootState) {
      try {

        const video = await getVideo({videoId})
        this.setVideo(video.url)

      } catch (e) {
        console.log(e)
      }
    }
  })
}