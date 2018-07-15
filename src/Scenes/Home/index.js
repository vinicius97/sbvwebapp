import React, { Component } from 'react'
import { listVideos } from '../../Services/API'
import { Grid } from '../../Components/Grid'

import './index.scss'
import {connect} from 'react-redux'

export class Home extends Component{

  state = {
    videoList: [],
    uploadList: []
  }

  static defaultProps = {
    upload: {
      list: []
    }
  }

  handleListVideos = async () => {
    try{
      const videos = await listVideos()
      this.setState({videoList: videos.reverse()})
    }catch (e) {
      console.log(e)
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.upload.list !== this.props.upload.list){
      this.setState({
        uploadList: this.props.upload.list
      })
    }
  }

  componentDidMount(){
    this.handleListVideos()
  }

  render(){
    const { videoList, uploadList } = this.state
    return(
      <section className={`home--container`}>
        <header className={`home--container--header`}>
          <h1 className={`home--container--header__logo`}>
            Video Upload
          </h1>
        </header>
        <div className={`home--container--content`}>
          <Grid list={videoList} uploadList={uploadList} />
        </div>
      </section>
    )
  }
}

const mapState = state => ({
  upload: {
    list: state.upload.list
  }
})

const mapDispatch = ({})

export default connect(mapState, mapDispatch)(Home)