import styled from "styled-components";

export const Container =  styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  grid-template-areas: 
    "header header"
    "newmovie newmovie"
    "content content"
  ;
`

export const Newmovie = styled.div`
  display: flex;
  justify-content: space-between;

  grid-area: newmovie;
  
  padding: 0 120px;

  margin-top: 50px;
  margin-bottom: 40px;

  > h1 {
    font-size: 32px;
  }

  > button {
    width: 208px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`

export const Content = styled.div`
  grid-area: content;

  overflow-y: auto;
  max-height: 700px;

  margin-bottom: 60px;
`