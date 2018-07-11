import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'
import { Loader } from '../'

configure({adapter: new Adapter()})

describe('<Loader />', () => {

  const wrapper = shallow(<Loader />)

  it('Comparar snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('Validar loader icon', () => {
    expect(wrapper.find('.loader--icon')).toHaveLength(1)
  })

})