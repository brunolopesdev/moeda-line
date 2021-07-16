import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute, SidebarLinkRouter } from "../StyledComponents"
import AuthContext from "../../Context/AuthContext"
import { useContext } from "react"

const Sidebar = ({ isOpen, toggle }) => {

  const { loggedIn } = useContext(AuthContext)

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>
            Inicio
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            Sobre
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Ferramentas
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contato
          </SidebarLink>
          <SidebarLinkRouter to="/dashboard" onClick={toggle}>
              Dashboard
            </SidebarLinkRouter>
        </SidebarMenu>
        
        {loggedIn === false && (
          <>
            <SidebarLinkRouter to="/login" onClick={toggle}>
              Entrar
            </SidebarLinkRouter>
            <SideBtnWrap>
              <SidebarRoute to="/register" onClick={toggle}>CADASTRE-SE!</SidebarRoute>
            </SideBtnWrap>
          </>)}
        {loggedIn === true && (
          <SideBtnWrap>
            <SidebarRoute to="/logout" onClick={toggle}>Sair</SidebarRoute>
          </SideBtnWrap>
        )}
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
