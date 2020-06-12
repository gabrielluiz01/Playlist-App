import React, { Component } from 'react';
import styled from 'styled-components';
// import { Container } from './styles';


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

const Title = styled.h1`
	color: purple;
	font-size: 1rem;
`;

class Paylists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [
        {
          cantor: 'Thiaguinho',
          música: 'Ainda Bem',
        },
        {
          cantor: 'Filipe Ret',
          música: 'A Libertina',
        },
        {
          cantor: 'Thiaguinho',
          música: 'Desencana',
        },
        {
          cantor: 'Thiaguinho',
          música: 'Sou o Cara pra você',
        },
        {
          cantor: 'Melin',
          música: 'Meu Abrigo',
        },
        {
          cantor: 'Iza',
          música: 'Dona de Mim',
        },
        {
          cantor: 'Matheus & Kauan',
          música: 'Nessas Horas',
        },
        {
          cantor: 'Matheus & Kauan',
          música: 'Ao Vivo e as Cores',
        },
        {
          cantor: 'Henrique e Juliano',
          música: 'De Trás pra Frente',
        },
      ]
    };
  }
render() {
  const { playlists } = this.state;
    return (
      <Container>
        <ul>
          {playlists.map((item) => (
            <li>
            <Title>{item.cantor}</Title>
            <Title>{item.música}</Title>
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}

export default Paylists;