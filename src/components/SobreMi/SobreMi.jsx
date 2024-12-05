import styled from "styled-components";
export function SobreMi() {
  return (
  <Container>
    <Span>Sobre Mi</Span>
    <div className="container-box">
        <p>Soy egresado en Computación e Informática con especialización en desarrollo de aplicaciones web. Mi curiosidad natural me impulsa constantemente a mejorar mis habilidades en diversas áreas de TI. Disfruto resolviendo problemas y ayudando a otros. Con experiencia práctica y un enfoque principal en desarrollo web, estoy siempre ansioso por aprender y crecer profesionalmente.</p>
    </div>
  </Container>
  );
}
const Container =styled.div`
    p{
        color: #8c9bab;
        font-size: 14px;
    }
    .container-box{
        margin: 16px 0;
        padding:16px 8px;
        max-width: 600px;
        background-color:#22272b;
    }
`
const Span =styled.span`
        font-weight: 400;
        color: #b6c2cf;
        padding-bottom:4px;
`