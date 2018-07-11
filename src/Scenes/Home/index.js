import React, { Component } from 'react'
import { Uploader } from '../../Components/Uploader'
import { listVideos } from '../../Services/API'

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
        {list.map((item, index) => (
          <div key={index}>
            {item.title}
          </div>
        ))}
        <Uploader />
      </div>
    )
  }
}

export default Home