import React from 'react';
import styled from 'styled-components';

const Botao = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    color: ${props => props.color};
    border-radius: 4px;
    border: 0;
    font-size: 16px;
    background: ${props => props.background};
    box-shadow: black 8px 8px 4px 0;
    
`;

const BotaoEditar = (props) => {
    return (
        <Botao
        width={props.width}
        height={props.height}
        color={props.color}
        background={props.background}
        >
         {props.children}
        </Botao>
    );
}

export default BotaoEditar;