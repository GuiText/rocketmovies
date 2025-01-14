import { Container, Profile } from "./style";

export function Header(){
  return(
    <Container>
      <h1>RocketMovies</h1>

      <input 
        type="text"
        placeholder="Pesquisar pelo título"
      />

      <Profile>
        <div>
          <strong>Guilherme Teixeira</strong>
          <a href="/login">Sair</a>
        </div>
        <img src="http://github.com/GuiText.png" alt="Imagem do usuário" />
      </Profile>
    </Container>
  )
}