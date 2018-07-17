import React from 'react'

import { player } from '../index'

describe('Model VideoPlayer', () => {

  it('Verificar adição de vídeo ao state', () => {
    let state = {
      video: []
    }

    const { reducers } = player
    state = reducers.setVideo(state, 'http://exemplo.com/video.mp4')
    expect(state.video).toEqual('http://exemplo.com/video.mp4')
  })
})