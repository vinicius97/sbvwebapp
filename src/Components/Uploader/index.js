import React, { Component } from 'react'
import { uploadVideo } from '../../Services/API'

export class Uploader extends Component{

  state = {
    file: null
  }

  handleOnFormSubmit = (e) => {
    e.preventDefault()
    this.handleUpload(this.state.file)
  }

  handleOnChange = (e) => {
    this.setState({file: e.target.files[0]})
  }

  handleUpload = (file) => {
    uploadVideo(file)
  }

  render() {
    return (
      <form className={`uploader--form`} onSubmit={this.handleOnFormSubmit}>
        <input
          className={`uploader--form__input`}
          type='file'
          name={`video`}
          onChange={this.handleOnChange} />

        <button
          className={`uploader--form__button`}
          type='submit'>
          Upload
        </button>
      </form>
    )
  }
}