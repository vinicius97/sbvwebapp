import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'

import { Grid } from '../../../Components/Grid'
import { Header } from '../../../Components/Header'

import { Home } from '../index'

configure({adapter: new Adapter()})

describe('<Home />', () => {

  const wrapper = shallow(<Home upload={{list: []}} />)

  it('Comparar snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('Validar presença do <Grid />', ()=> {
    const grid = wrapper.find(Grid)

    expect(grid).toHaveLength(1)
  })

  it('Validar presença do <Header />', ()=> {
    const header = wrapper.find(Header)

    expect(header).toHaveLength(1)
  })
})