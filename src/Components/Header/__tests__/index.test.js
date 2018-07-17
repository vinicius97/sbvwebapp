import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'
import { Link } from 'react-router-dom'

import { Header } from '../'
import Logotipo from  '../images/sambatech.svg'

configure({adapter: new Adapter()})

describe('<Header />', () => {

  const wrapper = shallow(<Header homePage={'/homepage'}/>)

  it('Comparar snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('Validar exibição de link Home', () => {
    const linkHome = wrapper.find(Link)

    expect(linkHome).toHaveLength(1)
    expect(linkHome.prop('to')).toEqual('/homepage')

    wrapper.setProps({homePage: null})
    expect(wrapper.find(Link)).toHaveLength(0)
  })

  it('Validar exibição do logotipo', () => {
    const logotipo = wrapper.find('.header--container__logo')

    expect(logotipo).toHaveLength(1)
    expect(logotipo.prop('src')).toEqual(Logotipo)
  })

})