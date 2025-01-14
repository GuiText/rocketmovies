import { Container } from "./style";

export function ButtonText({ icon: Icon, title}){
  return(
    <Container>
      <a href="#">
        {Icon && <Icon size={20} />}
        {title}
      </a>
    </Container>
  )
}