import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'

import { NotFound } from '../index'

configure({adapter: new Adapter()})

describe('<NotFoud />', () => {

  const wrapper = shallow(<NotFound />)

  it('Comparar snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('Validar renderização', ()=> {
    expect(wrapper.find('div').text()).toEqual('Página não encontrada')
  })
})