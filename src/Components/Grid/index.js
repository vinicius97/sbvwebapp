import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Uploader from '../Uploader'
import { Loader } from '../Loader'
import './index.scss'

const Grid = ({list, uploadList}) => (
  <div className={`grid--container`}>
    <Uploader />

    {uploadList.map((item, index) => {
      if(item.status.toLowerCase() !== 'finalizado'){
        return (
          <div className={`grid--container--item grid--container--item--processing`} key={index}>
            <div className={`grid--container--item__title`}>
              {item.title}
            </div>
            <Loader />
            <div className={`grid--container--item__loading`}>
              {item.status}
            </div>
          </div>
        )
      }else{
        return(
          <Link to={`/video/${item._id}`} className={`grid--container--item`} key={index}>
            <div className={`grid--container--item__title`}>
              {item.title}
            </div>
            <div className={`grid--container--item__play`} />
          </Link>
        )
      }
    })}

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
  list: PropTypes.array,
  uploadList: PropTypes.array
}

Grid.defaultProps = {
  uploadList: []
}

export { Grid }