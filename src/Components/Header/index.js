import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './index.scss'
import Logotipo from  './images/sambatech.svg'

const Header = ({homePage}) => (
  <header className={`header--container`}>
    {homePage && (
      <Link className={'header--container__back'} to={homePage} >
        Home
      </Link>
    )}
    <img
      alt={`SambaTech`}
      className={`header--container__logo`}
      src={Logotipo} />
  </header>
)

Header.propTypes = {
  homePage: PropTypes.string
}

export { Header }