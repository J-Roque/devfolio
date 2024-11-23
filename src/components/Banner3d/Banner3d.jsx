import styled from "styled-components";
import {Dragon} from "../../index"
export function Banner3d() {
  return (
  <Container>
    <Dragon/>
  </Container>);
}
const Container =styled.div`
    width: 100%;
    background-image: linear-gradient(270deg, rgb(255, 240, 179) 0%, rgb(255, 196, 0) 100%);
    background-size: cover;
    background-position: center center;
    overflow: hidden;
`