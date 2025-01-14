import { FiPlus, FiStar } from "react-icons/fi";

import { Container, Newmovie, Content } from "./style";

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { MoviePreview } from '../../components/MoviePreview'

export function Home(){
  return(
    <Container>
      <Header />

      <Newmovie>
        <h1>Meus filmes</h1>
        <Button 
          icon={FiPlus}
          title="Adicionar filme" 
        />
      </Newmovie>

      <Content>
        <MoviePreview />
        <MoviePreview />
        <MoviePreview />
        <MoviePreview />
        <MoviePreview />
      </Content>
    </Container>
  )
}