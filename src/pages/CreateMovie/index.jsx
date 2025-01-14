import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { MovieItem } from "../../components/MovieItem"
import { Button } from "../../components/Button"

import { Container, Section, Form } from "./style"
import { FiArrowLeft } from "react-icons/fi"

export function CreateMovie(){
  return(
    <Container>
      <Header />

      <main>
        <ButtonText 
          icon={FiArrowLeft}
          title="Voltar"
        />

        <h1>Novo Filme</h1>

        <Form>
          <div className="title">
            <Input 
              placeholder="Título"
              type="text"
            />

            <Input 
              placeholder="Sua nota (de 0 a 5)"
              type="text"
            />
          </div>

            <TextArea 
              placeholder="Observações"
            />  

          <Section>
            <h2>Marcadores</h2>
            <div className="tags">
              <MovieItem 
                placeholder="Drama"
                value="Drama"
              />
              <MovieItem 
                isNew
                placeholder="Novo Marcador"
              />
            </div>
          </Section>

          <div className="buttons">
            <Button title="Excluir Filme"/>
            <Button title="Salvar alterações"/>
          </div>
        </Form>
      </main>
    </Container>
  )
}