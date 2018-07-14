import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { listVideos } from '../../Services/API'
import Uploader from '../../Components/Uploader'

import './index.scss'

export class Home extends Component{

  state = {
    list: []
  }

  handleListVideos = async () => {
    const videos = await listVideos()
    this.setState({list: videos})
  }

  componentDidMount(){
    this.handleListVideos()
  }

  render(){
    const { list } = this.state
    return(
      <div>
        <h1>Video Upload</h1>
        <Uploader />

        {list.map((item, index) => (
          <div key={index}>
            {item.title}
            {item.url}
            <Link to={`/video/${item._id}`}>
              Play
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

export default Home