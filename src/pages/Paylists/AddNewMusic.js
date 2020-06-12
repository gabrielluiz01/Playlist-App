import React from 'react';
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
  height: 70vh;
  border-radius: 5px;
  background: #fff;
`;

const FormAddMusic = styled.form`

`;

const TitleMusic = styled.input`

`;

const ArtistMusic = styled.input`

`;

const GenreMusic = styled.input`

`;

const LinkMusic = styled.input`

`;

function Paylists() {
  return(
  <Container>
    <ModelAddMusic>
      <FormAddMusic>
        <TitleMusic 
          placeholder="Titulo da Música"
          required
          type="text" />
        <ArtistMusic
          placeholder="Nome do artista"
          required
          type="text" />
        <GenreMusic
          placeholder="Nome da música"
          required
          type="text" />
        <LinkMusic
          placeholder="Link da música"
          required
          type="text" />
      </FormAddMusic>
    </ModelAddMusic>
  </Container>
  );
}

export default Paylists;