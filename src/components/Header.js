import React, { Component } from 'react';
import '../index.css'
import styled from 'styled-components';

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #00000050;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items:  center;
`;

const Modal = styled.form`
  width: 35vw;
  min-height: 45vh;
  padding: 1rem;
  border-radius: 6px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalTitle = styled.h2`
  text-align: center;
`;

const InputBox = styled.label`
  width: 85%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const TextLabel = styled.p`
  margin: .5rem 0; 
`;

const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  border-radius: 6px;
  border: 1px solid green;
  padding: 1rem;
`;

const TextArea = styled.textarea`
  border: 1px solid green;
  border-radius: 6px;
  height: 4rem;
  resize: none;
  padding: .5rem 1rem;
`;

const ButtonBox = styled.span`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const Button = styled.button`
  width: 7rem;
  height: 2.5rem;
  background: green;
  border-radius: 6px;
  color: #FFF;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

class Header extends Component{
  state = {
    isModalCreatePlaylist: true,
    playlistInfo: {}
  }

  openModalPlaylist = () => {
    this.setState({
      isModalCreatePlaylist: true,
    })
  }

  closeModal = () => {
    this.setState({
      isModalCreatePlaylist: false,
    })
  }

  handleChange = (values, ev) => {
    const { playlistInfo } = this.state;
    playlistInfo[values] = ev.target.value;
    this.setState({ playlistInfo })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(this.state.playlistInfo)
  }

  renderModalPlaylist = () => (
    <Overlay onClick={this.closeModal}>
      <Modal onSubmit={this.handleSubmit} onClick={ev => ev.stopPropagation()}>
        <ModalTitle>Adicionar uma playlist</ModalTitle>
        <InputBox>
          <TextLabel>Titulo</TextLabel>
          <Input
            type="text"
            value={this.state.playlistInfo.title}
            onChange={ev => this.handleChange('title', ev)}
          />
        </InputBox>
        <InputBox>
          <TextLabel>Descrição</TextLabel>
          <TextArea
            type="text"
            value={this.state.playlistInfo.description}
            onChange={ev => this.handleChange('description', ev)}
          />
        </InputBox>
        <ButtonBox>
          <Button type="submit">Send</Button>
        </ButtonBox>
      </Modal>
    </Overlay>
  )

  render() {
    return (
      <header>
        <h1>playlist App</h1>
        <button className="button-add-playlist" onClick={this.openModalPlaylist}>Add Playlist</button>
        {this.state.isModalCreatePlaylist && this.renderModalPlaylist()}
      </header>
    );
  }
}

export default Header;