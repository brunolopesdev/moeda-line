import { AboutContainer, AboutWrapper, AboutH1, AboutSpan, AboutH2, AboutP, AboutCard, AboutIcon, AboutCardImg } from "../../components/StyledComponents"
import Icon from "../../assets/about1.svg"

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutH1>Sobre <AboutSpan>Nós</AboutSpan>!</AboutH1>
      <AboutWrapper>
        <AboutCard>
          <br />
          <br />
          <AboutH2>A <AboutSpan>MOEDA-LINE</AboutSpan> é um site criado para o Projeto Integrador do curso de Dev Web Full Stack da Digital House.</AboutH2>
          <br />
          <br />

          <AboutP>Consiste em um Web App para organização financeira, voltado para empresas. O projeto está sendo desenvolvido utilizando HTML, CSS, JavaScript, ReactJS, NodeJS entre outras tecnologias.</AboutP>
        </AboutCard>
        <AboutCardImg>
          <AboutIcon src={Icon} />
        </AboutCardImg>
      </AboutWrapper>

    </AboutContainer>
  )
}

export default About
