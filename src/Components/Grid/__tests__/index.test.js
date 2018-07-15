import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'
import { Link } from 'react-router-dom'

import { Uploader } from '../../Uploader'
import { Grid } from '../'

configure({adapter: new Adapter()})

describe('<Grid />', () => {

  const list = [
    {
      status: "",
      _id: "125",
      bucket: "exemplo",
      title: "ABC",
      filename: "video_abc.mp4",
      key: "video_abc.mp4",
      url: ""
    },
    {
      status: "",
      _id: "126",
      bucket: "exemplo",
      title: "DEF",
      filename: "video_def.mp4",
      key: "video_def.mp4",
      url: ""
    }
  ]

  const uploadList = [
    {
      uid: '123456',
      title: 'A Barca',
      status: 'Enviando'
    },
    {
      uid: '234598',
      title: 'A Canoa',
      status: 'Encodando'
    },
    {
      _id: "126",
      uid: '134598',
      title: 'Acabou',
      status: 'Finalizado'
    }
  ]
  const wrapper = shallow(<Grid list={list} uploadList={uploadList} />)

  it('Comparar snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('Verificar se a lista foi renderizada com videos disponiveis para execução', () => {
    const LinkComponent = wrapper.find(Link)

    const videoUploadComplete = LinkComponent.slice(0).at(0)
    const videoABC = LinkComponent.slice(1).at(0)
    const videoDEF = LinkComponent.slice(2).at(0)

    expect(LinkComponent).toHaveLength(3)

    expect(videoUploadComplete.prop('to')).toEqual('/video/'+uploadList[2]._id)
    expect(videoUploadComplete.find('.grid--container--item__title').text()).toEqual(uploadList[2].title)
    expect(videoUploadComplete.find('.grid--container--item__play')).toHaveLength(1)

    expect(videoABC.prop('to')).toEqual('/video/'+list[0]._id)
    expect(videoABC.find('.grid--container--item__title').text()).toEqual(list[0].title)
    expect(videoABC.find('.grid--container--item__play')).toHaveLength(1)

    expect(videoDEF.prop('to')).toEqual('/video/'+list[1]._id)
    expect(videoDEF.find('.grid--container--item__title').text()).toEqual(list[1].title)
    expect(videoDEF.find('.grid--container--item__play')).toHaveLength(1)

  })

  it('Verificar se a lista de uploads foi renderizada', () => {
    const UploadItens = wrapper.find('.grid--container--item--processing')

    const videoA = UploadItens.slice(0).at(0)
    const videoB = UploadItens.slice(1).at(0)

    expect(UploadItens).toHaveLength(2)

    expect(videoA.find('.grid--container--item__title').text()).toEqual(uploadList[0].title)
    expect(videoA.find('.grid--container--item__loading')).toHaveLength(1)

    expect(videoB.find('.grid--container--item__title').text()).toEqual(uploadList[1].title)
    expect(videoB.find('.grid--container--item__loading')).toHaveLength(1)
  })

})