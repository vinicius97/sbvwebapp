import { encodeVideo, uploadVideo } from '../../Services/API'
import { subscribeToUploadStatus } from '../../Services/Sockets'

const initState = {
  list: []
}

export const upload = {
  state: initState,
  reducers: {
    addToList(state, payload) {
      return {...state, list: [{...payload}, ...state.list]}
    },
    updateList(state, payload){
      const list = state.list
      const updatedList = list.map((item)=> {
        if(item.uid === payload.uid){
          item = {...item, ...payload}
        }

        return item
      })

      return {...state, list: updatedList}
    }
  },
  effects: (dispatch) => ({
    async uploadFile ({file, title}, rootState) {

      const uploadItem = {
        uid: title+ Date.now(),
        title: title,
        status: ''
      }

      try {

        this.addToList(uploadItem)
        this.updateList({ uid: uploadItem.uid, status: 'Enviando' })

        subscribeToUploadStatus((status) => this.updateList({ uid: uploadItem.uid, status }))

        const fileInfo = await uploadVideo({file, title})
        const encodInfo = await encodeVideo(fileInfo)

        this.updateList({ uid: uploadItem.uid, ...encodInfo })

      } catch (e) {
        this.updateList({id: uploadItem.id, status: 'Falha'})
        console.log(e)
      }
    }
  })
}