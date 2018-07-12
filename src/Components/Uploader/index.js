import React, { Component } from 'react'
import { connect } from 'react-redux'

import './index.scss'

export class Uploader extends Component{

  static defaultProps = {
    upload: {
      status: ''
    }
  }

  state = {
    error: '',
    file: null,
    title: null,
  }

  handleOnFormSubmit = (e) => {
    e.preventDefault()

    const { file, title } = this.state
    if(!file) {
      this.handleError('Selecione um arquivo')
    }else{
      this.handleError('')
      this.handleUpload(file, title)
    }
  }

  handleError = (error) => {
    this.setState({error})
  }

  handleOnChangeTitle = (e) => {
    this.setState({title: e.target.value})
  }

  handleOnChangeFile = (e) => {
    this.setState({file: e.target.files[0]})
  }

  handleUpload = async (file) => {
    this.props.uploadFile(file)
  }

  render() {
    return (
      <form className={`uploader--form`} onSubmit={this.handleOnFormSubmit}>
        {this.props.upload.status}
        {this.state.error}
        <input
          type='text'
          name='title'
          className={`uploader--form__input`}
          onKeyUp={this.handleOnChangeTitle}
          placeholder='Título do vídeo'/>

        <input
          className={`uploader--form__input`}
          type='file'
          name='video'
          onChange={this.handleOnChangeFile} />

        <button
          className={`uploader--form__button`}
          type='submit'>
          Upload
        </button>
      </form>
    )
  }
}

const mapState = state => ({
  upload: {
    status: state.upload.status
  }
})

const mapDispatch = ({ upload: { uploadFile }}) => ({
  uploadFile
})

export default connect(mapState, mapDispatch)(Uploader)