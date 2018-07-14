import React, { Component } from 'react'
import { listVideos } from '../../Services/API'
import { Grid } from '../../Components/Grid'

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
    console.log(JSON.stringify(list))
    return(
      <section className={`home--container`}>
        <header className={`home--container--header`}>
          <h1 className={`home--container--header__logo`}>
            Video Upload
          </h1>
        </header>
        <div className={`home--container--content`}>
          {/*<Uploader />*/}
          <Grid list={list} />
        </div>
      </section>
    )
  }
}

export default Home