import { HeroContainer, HeroImg, HeroContent, HeroH1, HeroP, HeroSpan, MeuBotao, HeroBtnWrapper } from "../StyledComponents"
import ImgInicio from "../../assets/svg-2.svg"

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      
      <HeroContent>
        <HeroH1>Somos a <HeroSpan>MOEDA-LINE</HeroSpan>, a solução para seu controle financeiro!</HeroH1>
        <HeroP>Tenha acesso a ferramentas exclusivas sem nenhum custo!</HeroP>
        
        <HeroImg src={ImgInicio}/>
        <HeroBtnWrapper>
          <MeuBotao to="/register">Saiba mais!</MeuBotao>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
