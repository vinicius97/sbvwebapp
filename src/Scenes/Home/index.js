import React, { Component } from 'react'
import { Uploader } from '../../Components/Uploader'

import './index.scss'

export class Home extends Component{

  render(){
    return(
      <div>
        <h1>Video Upload</h1>
        <Uploader />
      </div>
    )
  }
}

export default Home