import React, { Component } from 'react'
import { uploadVideo } from '../../Services/API'

export class Uploader extends Component{

  state = {
    file: null,
    title: 'default'
  }

  handleOnFormSubmit = (e) => {
    e.preventDefault()

    const { file, title } = this.state
    this.handleUpload(file, title)
  }

  handleOnChangeTitle = (e) => {
    this.setState({title: e.target.value})
  }

  handleOnChangeFile = (e) => {
    this.setState({file: e.target.files[0]})
  }

  handleUpload = (file) => {
    uploadVideo(file)
  }

  render() {
    return (
      <form className={`uploader--form`} onSubmit={this.handleOnFormSubmit}>
        <input
          type='text'
          name='title'
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