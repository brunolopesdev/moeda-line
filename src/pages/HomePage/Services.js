import Icon1 from "@/assets/analytics.svg"
import Icon2 from "@/assets/personalSettings.svg"
import Icon3 from "@/assets/pitching.svg"
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP, ServicesSpan } from '@/components/StyledComponents'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Nossas <ServicesSpan>Ferramentas</ServicesSpan>!</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Controle seus gastos</ServicesH2>
          <ServicesP>Ajudamos você a controlar suas despesas</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Totalmente Online</ServicesH2>
          <ServicesP>Todos os nosso serviços disponiveis na palma da sua mão</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Controle Total</ServicesH2>
          <ServicesP>Tenha controle total sobre seus rendimentos</ServicesP>
        </ServicesCard>
      </ServicesWrapper>

    </ServicesContainer>
  )
}

export default Services
