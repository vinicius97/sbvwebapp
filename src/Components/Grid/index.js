import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './index.scss'

const Grid = ({list}) => (
  <div className={`grid--container`}>
    {list.map((item, index) => (
      <Link to={`/video/${item._id}`} className={`grid--container--item`} key={index}>
        <div className={`grid--container--item__title`}>
          {item.title}
        </div>
        <div className={`grid--container--item__play`} />
      </Link>
    ))}
  </div>
)

Grid.propTypes = {
  list: PropTypes.array
}

export { Grid }