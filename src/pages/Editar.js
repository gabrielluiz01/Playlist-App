import React, { Component } from 'react';
import styled from 'styled-components';

import BotaoEditar from '../components/buttonEdite';

const Body = styled.body`
    background-image: linear-gradient(to right, #6fcbf0 , #d869c1);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Musica = styled.div`
    background-color: white;
    width: 70%;
    height: 7rem;
    border-radius: 4px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const NomeMusica = styled.h2`
    font-size: 1.2rem;
`;
const Albun = styled.h2`
    font-size: 1.2rem;
`;
const Artista = styled.h2`
    font-size: 1.2rem;
`;

class Editar extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
            <Body>
                <Musica>
                    <NomeMusica>Back To Love</NomeMusica>
                    <Albun>Indigo</Albun>
                    <Artista>Chris Brown</Artista>
                </Musica>
                <BotaoEditar
                width="10%"
                height="5%"
                >Editar</BotaoEditar>
            </Body>
        )
    }
};                                                                    
export default Editar;



