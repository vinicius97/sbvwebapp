import React, { Component } from 'react'
import {connect} from 'react-redux'

import { Header } from '../../Components/Header'

import './index.scss'

class VideoPlayer extends Component{
  componentDidMount(){
    const videoId = this.props.match.params.id
    this.props.loadVideo({videoId})
  }

  render(){
    return (
      <section>
        <Header homePage={`/`} />
        <div className={`video-player--container`}>
          <video className={`video-player--container__player`} src={this.props.player.video} controls>
            Seu navegador não suporta o elemento <code>video</code>.
          </video>
        </div>
      </section>
    )
  }
}

const mapState = state => ({
  player: {
    video: state.player.video
  }
})

const mapDispatch = ({ player: { loadVideo }}) => ({
  loadVideo
})

export default connect(mapState, mapDispatch)(VideoPlayer)