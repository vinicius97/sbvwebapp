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

  it('Validar estrutura com form oculto', () => {
    expect(wrapper.find('.uploader--form')).toHaveLength(0)
    expect(wrapper.find('.uploader--form--input__text')).toHaveLength(0)
    expect(wrapper.find('.uploader--form--input--file')).toHaveLength(0)
    expect(wrapper.find('.uploader--form__button')).toHaveLength(1)
  })

  it('Validar estrutura com form exibido', () => {
    wrapper.setState({showForm: true})
    expect(wrapper.find('.uploader--form')).toHaveLength(1)
    expect(wrapper.find('.uploader--form--input__text')).toHaveLength(1)
    expect(wrapper.find('.uploader--form--input--file')).toHaveLength(1)
    expect(wrapper.find('.uploader--form__button')).toHaveLength(2)
  })

})