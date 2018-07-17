import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'
import { Switch, Route } from 'react-router-dom'

import Dashboard from '../../Home'
import VideoPlayer from '../../VideoPlayer'
import NotFound from '../../NotFound'

import { App } from '../index'

configure({adapter: new Adapter()})

describe('<App />', () => {

  const wrapper = shallow(<App />)
  const routes = wrapper.find(Route)

  it('Comparar snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('Validar carregamento scenes', ()=> {
    expect(wrapper.find(Switch)).toHaveLength(1)
    expect(routes).toHaveLength(3)
  })

  it('Validar scene Dashboard', ()=> {
    const dashboardScene = routes.slice(0).at(0)

    expect(dashboardScene.prop('path')).toEqual('/')
    expect(dashboardScene.prop('component')).toEqual(Dashboard)
  })

  it('Validar scene VideoPlayer', ()=> {
    const videoPlayerScene = routes.slice(1).at(0)

    expect(videoPlayerScene.prop('path')).toEqual('/video/:id')
    expect(videoPlayerScene.prop('component')).toEqual(VideoPlayer)
  })

  it('Validar scene VideoPlayer', ()=> {
    const notFoundScene = routes.slice(2).at(0)

    expect(notFoundScene.prop('component')).toEqual(NotFound)
  })
})