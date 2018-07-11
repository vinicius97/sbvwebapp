import React, { Component } from 'react'
import { uploadVideo } from '../../Services/API'

import './index.scss'

export class Uploader extends Component{

  state = {
    error: '',
    file: null,
    title: null,
    uploadStatus: ''
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
    this.setState({uploadStatus: 'Enviando'})
    const response = await uploadVideo(file)
    this.setState({uploadStatus: response.data})
  }

  render() {
    return (
      <form className={`uploader--form`} onSubmit={this.handleOnFormSubmit}>
        {this.state.uploadStatus}
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