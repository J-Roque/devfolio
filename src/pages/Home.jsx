import styled from "styled-components";
import {
  Header,
  Banner3d,
  SobreMi
} from "../index";
import profileImage from '../assets/programer.png'
export function Home() {
  return (
  <Container>
    <Header/>
    <Banner3d/>
    <Main>
      <SectionInfo>
        <div className="logo_perfil">
          <img className="logo_perfil_img" src={profileImage} alt="logo_programador" />
        </div>
      </SectionInfo>
      <SectionDetails>
      <SobreMi></SobreMi>
      </SectionDetails>
    </Main>
  </Container>);
}
const Container =styled.div`

`

const Main =styled.main`
  display: grid;
  width: 950px;
  max-width: 100%;
  margin: auto;
  grid-template-columns: 320px 640px;
  grid-template-areas:
    "SectionInfo SectionDetails";
`
const SectionInfo = styled.div`
  grid-area: SectionInfo;
  position: relative;
  .logo_perfil{
    width: 128px;
    height: 128px;
    border-radius:50%;
    position: absolute;
    top: -70px;
  }
  .logo_perfil .logo_perfil_img{
    width: 100%;
    height: 100%;
    border-radius:50%;
  }

`

const SectionDetails = styled.div`
  margin-top: 32px;
 grid-area: SectionDetails;

`