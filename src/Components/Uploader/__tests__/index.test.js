import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'
import { Uploader } from '../'

configure({adapter: new Adapter()})

describe('<Uploader />', () => {

  const wrapper = shallow(<Uploader />)

  it('Comparar snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('Validar estrutura HTML', () => {
    expect(wrapper.find('.uploader--form')).toHaveLength(1)
    expect(wrapper.find('.uploader--form__input')).toHaveLength(2)
    expect(wrapper.find('.uploader--form__button')).toHaveLength(1)
  })

})