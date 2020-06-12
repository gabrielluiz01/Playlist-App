import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-width: 100%;
  min-height: 100vh;
  background: rgba(111, 111, 111, 0.5);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModelAddMusic = styled.div`
  width: 400px;
  height: 85vh;
  border-radius: 5px;
  background: #fff;
`;

const FormAddMusic = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding:1rem 0;
`;

const ContainerInput = styled.label`
  width: 80%;
  font-family: sans-serif;
  margin: .5rem 1.5rem;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
width: 100%;
  margin: .5rem 0;
  border: 1px solid #666;
  border-radius: 5px;
  height: 2.5rem;
  padding: .2rem .5rem;
`;

const Button = styled.button`
  width: 80%;
  margin: .5rem 0;
  border: 1px solid #666;
  border-radius: 5px;
  height: 2.5rem;
  padding: .2rem .5rem;
`;


class AddNewMusic extends Component{
  state = {
    music: [
      {
      title: '',
      artist: '',
      music: '',
      link: '',
      }
    ],
  }

  handleChange = () => {

  }

  render() {

    return(
    <Container>
      <ModelAddMusic>
        <FormAddMusic>
          <ContainerInput>
            <h2>Titulo</h2>
            <Input
              onChange={this.handleChange}
              value={this.state.title}
              placeholder="Titulo"
              required
              type="text" />
          </ContainerInput>
          <ContainerInput>
            <h2>artista</h2>
            <Input
              onChange={this.handleChange}
              value={this.state.artist}
              placeholder="Nome do artista"
              required
              type="text" />
          </ContainerInput>
          <ContainerInput>
            <h2>Nome da música</h2>
            <Input
              onChange={this.handleChange}
              value={this.state.music}
              placeholder="Nome da música"
              required
              type="text" />
          </ContainerInput>
          <ContainerInput>
            <h2>Link para ouvir a música</h2>
            <Input
              onChange={this.handleChange}
              value={this.state.link}
              placeholder="Link da música"
              required
              type="text" />
          </ContainerInput>
          <Button type="submit">Enviar</Button>
          <Button>Cancelar</Button>
        </FormAddMusic>
      </ModelAddMusic>
    </Container>
    );
  }
}

export default AddNewMusic;