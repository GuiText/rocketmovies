import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

import { Input } from "../../components/Input"; 
import { Button } from "../../components/Button"; 
import { ButtonText } from "../../components/ButtonText"; 

import { Container, Background, Form } from "./style"; 


export function SignUp(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser} 
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail} 
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock} 
        />

        <Button title="Entrar"/>

        <ButtonText 
          icon={FiArrowLeft}
          title="Voltar ao login"
        />
      </Form>


      <Background />
    </Container>
  )
}