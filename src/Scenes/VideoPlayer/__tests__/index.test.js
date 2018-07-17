import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'

import { VideoPlayer } from '../index'
import { Header } from '../../../Components/Header'

configure({adapter: new Adapter()})

describe('<VideoPlayer />', () => {

  const wrapper = shallow(<VideoPlayer player={{video: 'video.mp4'}} match={{params:{id: ''}}} loadVideo={()=>{}} />)

  it('Comparar snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('Validar carregamento de header', ()=> {
    const header = wrapper.find(Header)

    expect(header).toHaveLength(1)
    expect(header.prop('homePage')).toEqual('/')
  })

  it('Validar player HTML5', () => {
    const player = wrapper.find('.video-player--container__player')

    expect(player).toHaveLength(1)
    expect(player.prop('src')).toEqual('video.mp4')
  })
})