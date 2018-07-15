import React, { Component, Fragment } from 'react'
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
    showForm: false
  }

  handleOnFormSubmit = (e) => {
    e.preventDefault()

    const { file, title } = this.state
    if(!file) {
      this.handleError('Selecione um arquivo para envio')
      return
    }
    if(!title) {
      this.handleError('Digite um título para o vídeo')
      return
    }

    this.handleError('')
    this.handleUpload(file, title)

    this.setState({
      error: '',
      file: '',
      title: '',
      showForm: false
    })
  }

  handleError = (error) => {
    this.setState({error})
  }

  handleOnChangeTitle = (e) => {
    this.state.error && this.handleError('')
    this.setState({title: e.target.value})
  }

  handleOnChangeFile = (e) => {
    this.state.error && this.handleError('')
    this.setState({file: e.target.files[0]})
  }

  handleUpload = async (file, title) => {
    this.props.uploadFile({file, title})
  }

  handleShowForm = () => {
    this.setState((s) => ({
      showForm: !s.showForm
    }))
  }

  render() {

    const { file } = this.state
    const showForm = this.state.showForm
    const formClass = showForm ? `uploader--form uploader--form--show` : `uploader--form`
    const maskClass = showForm ? `uploader--form--mask` : `uploader--form--mask__hide`
    const inputFileClass = file ?
      (`uploader--form--input--file uploader--form--input--file--filled`)
      :
      (`uploader--form--input--file uploader--form--input--file--empty`)

    return (
      <Fragment>
        <button
          className={`uploader--form__button`}
          onClick={this.handleShowForm}
          type='submit'>
          Enviar vídeo
        </button>

        <div className={maskClass} onClick={this.handleShowForm} />

        {showForm && (
          <form className={formClass} onSubmit={this.handleOnFormSubmit}>
            <div className={`uploader--form__error`}>
              {this.state.error}
            </div>

            <input
              type='text'
              name='title'
              className={`uploader--form--input__text`}
              onKeyUp={this.handleOnChangeTitle}
              placeholder='Título do vídeo'/>

            <input
              className={inputFileClass}
              type='file'
              name='video'
              onChange={this.handleOnChangeFile} />

            <button
              className={`uploader--form__button`}
              type='submit'>
              Upload
            </button>
          </form>
        )}
      </Fragment>
    )
  }
}

const mapState = state => ({})

const mapDispatch = ({ upload: { uploadFile }}) => ({
  uploadFile
})

export default connect(mapState, mapDispatch)(Uploader)