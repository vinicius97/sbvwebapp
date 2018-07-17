import mockAxios from 'axios'
import { listVideos, uploadVideo, encodeVideo } from '../index'

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

describe('API', () => {

  it('Teste api listVideos()', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [videoMock]
      })
    )

    const videoList = await listVideos()
    expect(videoList[0]._id).toEqual('2')
  })

  it('Teste api uploadVideo()', async () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: videoMock
      })
    )

    const params = {
      file: '<file>',
      title: 'title',
      key: 'H34',
    }

    const video = await uploadVideo(params)
    expect(video._id).toEqual('2')
  })

  it('Teste api encodeVideo()', async () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: {"_id":"2"}
      })
    )

    const params = {
      _id: '2'
    }

    const video = await encodeVideo(params)
    expect(video._id).toEqual('2')
  })

})