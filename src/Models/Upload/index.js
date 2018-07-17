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
        if(item.key === payload.key){
          item = {...item, ...payload}
        }

        return item
      })

      return {...state, list: updatedList}
    }
  },
  effects: (dispatch) => ({
    async uploadFile ({file, title}, rootState) {

      let uploadItem = {
        key: Date.now(),
        title: title,
        status: 'Enviando'
      }

      try {

        this.addToList(uploadItem)
        const fileInfo = await uploadVideo({ file, title, key: uploadItem.key })

        subscribeToUploadStatus(uploadItem.key, (params) => this.updateList(params))

        const encodInfo = await encodeVideo({key: uploadItem.key, ...fileInfo})
        this.updateList({ key: uploadItem.key, ...encodInfo })

      } catch (e) {
        this.updateList({ key: uploadItem.key, status: 'Falha' })
        console.log(e)
      }
    }
  })
}