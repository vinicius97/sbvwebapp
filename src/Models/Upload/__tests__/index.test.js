import React from 'react'

import { upload } from '../index'

describe('Model Upload', () => {

  it('Verificar função adicionar um upload a lista', () => {
    let state = {
      list: []
    }

    const uploadItem = {
      key: Date.now(),
      title: 'Item',
      status: 'Enviando'
    }

    const { reducers } = upload
    state = reducers.addToList(state, uploadItem)

    expect(state.list).toHaveLength(1)
    expect(state.list[0]).toEqual(uploadItem)

  })

  it('Verificar função adicionar vários uploads a lista', () => {
    let state = {
      list: []
    }

    const uploadItemA = {
      key: Date.now()+'A',
      title: 'A',
      status: 'Enviando'
    }

    const uploadItemB = {
      key: Date.now()+'B',
      title: 'B',
      status: 'Enviando'
    }

    const uploadItemC = {
      key: Date.now()+'C',
      title: 'C',
      status: 'Enviando'
    }

    const { reducers } = upload
    state = reducers.addToList(state, uploadItemA)
    state = reducers.addToList(state, uploadItemB)
    state = reducers.addToList(state, uploadItemC)

    expect(state.list).toHaveLength(3)
    expect(state.list[2]).toEqual(uploadItemA)
    expect(state.list[1]).toEqual(uploadItemB)
    expect(state.list[0]).toEqual(uploadItemC)

  })

  it('Verificar atualização de lista de upload', () => {
    let state = {
      list: []
    }

    let uploadItens = [{
      key: Date.now()+'A',
      title: 'Item',
      status: 'Enviando'
    },{
      key: Date.now()+'B',
      title: 'Item',
      status: 'Enviando'
    }]

    const { reducers } = upload
    state = reducers.addToList(state, uploadItens[1])
    state = reducers.addToList(state, uploadItens[0])

    expect(state.list).toHaveLength(2)

    uploadItens[0].status = 'Encodando'
    uploadItens[0]._id = 'AFDS78579DSAFA'
    uploadItens[1].status = 'Finalizado'
    uploadItens[1]._id = 'GSES78579DSDFA'

    state = reducers.updateList(state, uploadItens[1])
    state = reducers.updateList(state, uploadItens[0])

    expect(state.list[1]).toEqual(uploadItens[1])
    expect(state.list[0]).toEqual(uploadItens[0])

  })

})