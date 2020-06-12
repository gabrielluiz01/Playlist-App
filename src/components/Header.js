import React, { Component } from 'react';
import '../index.css'

// import { Container } from './styles';

class Header extends Component{
  state = {
    isModalCreatePlaylist: false,
  }

  openModalPlaylist = () => {
    this.setState({
      openModalPlaylist: true,
    })
  }

  render() {
    return (
      <header>
        <h1>playlist App</h1>
        <button className="button-add-playlist" onClick={this.openModalPlaylist}>Add Playlist</button>
      </header>
    );
  }
}

export default Header;