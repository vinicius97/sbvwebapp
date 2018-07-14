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
  const wrapper = shallow(<Grid list={list}/>)

  it('Comparar snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('Verificar se a lista foi renderizada', () => {
    const LinkComponent = wrapper.find(Link)

    const videoABC = LinkComponent.slice(0).at(0)
    const videoDEF = LinkComponent.slice(1).at(0)

    expect(LinkComponent).toHaveLength(2)

    expect(videoABC.prop('to')).toEqual('/video/'+list[0]._id)
    expect(videoABC.find('.grid--container--item__title').text()).toEqual(list[0].title)
    expect(videoABC.find('.grid--container--item__play')).toHaveLength(1)

    expect(videoDEF.prop('to')).toEqual('/video/'+list[1]._id)
    expect(videoDEF.find('.grid--container--item__title').text()).toEqual(list[1].title)
    expect(videoDEF.find('.grid--container--item__play')).toHaveLength(1)
  })

})