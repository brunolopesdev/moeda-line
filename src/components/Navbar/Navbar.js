import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  LogoImg,
  NavLinksRouter,
} from "../StyledComponents"
import { FaBars } from "react-icons/fa"
import { useContext } from "react"
import Logo from "@/assets/logo.png"
import AuthContext from "@/Context/AuthContext"
import Logout from "@/components/Logout/Logout"

const Navbar = ({ toggle }) => {

  const { loggedIn } = useContext(AuthContext)

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <LogoImg src={Logo} />
            moeda-line
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}>Inicio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}>Sobre</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}>Ferramentas</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}>Contato</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinksRouter to="/dashboard">Dashboard</NavLinksRouter>
            </NavItem>
          </NavMenu>
          {loggedIn === false && (
            <>
              <NavBtn>
                <NavBtnLink to="/login">Entrar</NavBtnLink>
              </NavBtn>
              <NavBtn>
                <NavBtnLink to="/register">CADASTRE-SE!</NavBtnLink>
              </NavBtn>
            </>
          )}
          {loggedIn === true && (
            <NavBtn>
              <Logout />
            </NavBtn>
          )}
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
