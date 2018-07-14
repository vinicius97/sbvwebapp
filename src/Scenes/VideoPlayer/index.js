import React, { Component } from 'react'
import {connect} from 'react-redux'

class VideoPlayer extends Component{
  componentDidMount(){
    const videoId = this.props.match.params.id
    this.props.loadVideo({videoId})
  }

  render(){
    return <div>
      Vídeo
      <video src={this.props.player.video} controls>
        Seu navegador não suporta o elemento <code>video</code>.
      </video>
    </div>
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