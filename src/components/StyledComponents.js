import styled from "styled-components"
import { Link as LinkRouter } from "react-router-dom"
import { Link as LinkScroll } from "react-scroll"
import { FaTimes } from "react-icons/fa"


export const EventWrapper = styled.div`
background: #fff;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 400px;
padding: 50px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
`

// HERO SECTION
export const HeroContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 100vh;
position: relative;
`

export const HeroContent = styled.div`
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`

export const HeroH1 = styled.h1`
color: #4a5257;
font-size: 48px;
text-align: center;

@media screen and (max-width: 768px){
  font-size: 40px;
}

@media screen and (max-width: 480px){
  font-size: 30px;
}
`

export const HeroP = styled.p`
margin-top: 24px;
color: #4a5257;
font-size: 24px;
text-align: center;
max-width: 600px;

@media screen and (max-width: 768px){
  font-size: 20px;
}

@media screen and (max-width: 480px){
  font-size: 16px;
}
`

export const HeroSpan = styled.span`
color: #e7d640;
`

export const HeroImg = styled.img`
width: 50%;
transition: all 0.2 ease-in-out;

&:hover{
  transform: scale(1.02);
  transition: all 0.2s ease-in-out;
}
@media screen and (max-width: 768px){
  width: 80%;
}

@media screen and (max-width: 480px){
  width: 80%;
}
`

export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`

// ABOUT
export const AboutContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 100vh;
position: relative;
`

export const AboutWrapper = styled.div`

align-items: center;
justify-content: center;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px){
  grid-template-columns: 1fr;
}


`

export const AboutH1 = styled.h1`
font-size: 50px;
color: #4a5257;
margin-bottom: 64px;

@media screen and (max-width: 480px){
  font-size: 2rem;
}
`

export const AboutH2 = styled.h2`
text-align: left;
font-size: 2.5rem;
margin-bottom: 10px;

@media screen and (max-width: 1200px){
font-size: 1.5rem;

}
`

export const AboutP = styled.p`
color: #4a5257;
font-size: 2rem;
text-align: left;

@media screen and (max-width: 1200px){
font-size: 1rem;

}
`

export const AboutSpan = styled.span`
color: #e7d640;
`

export const AboutCard = styled.div`
height: 100%;
background: #fff;
display: flex;
flex-direction: column;
border-radius: 5px;
padding: 20px;


@media screen and (max-width: 1200px){
height: 100%;

}

`
export const AboutCardImg = styled.div`
display: flex;
justify-content: center;
align-items: center;

&:hover{
  transform: scale(1.02);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

@media screen and (max-width: 980px){
  
}
`

export const AboutIcon = styled.img`
width: 100%;
`

// REGISTER E LOGIN
export const ContainerWrapper = styled.div`
  
  padding: 100px 0;
`
export const ContactWrapper = styled.div`
  height: 100vh;
  padding: 100px 0;
`
export const RegisterWrapper = styled.div`
  height: 100vh;
  padding: 100px 0;
`

export const LoginWrapper = styled.div`
  height: 100vh;
  padding: 100px 0;
`

export const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const MeuBotao = styled.button`
  background: #4a5257;
  border-radius: 3px;
  color: #fdfdfd;
  font-size: 1.2rem;
  margin: 0rem;
  padding: 0.75rem 1.25rem;
  margin: 8px 0;
  cursor: pointer;
  width: 100%;
`

export const Container = styled.div`
  padding: 20px;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const EventoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px;
  padding-top: 50px;
  background-color: #f2f2f2;
  border-radius: 10px;
`
export const Bar = styled.div`
  width: 100%;
  color: #333;
  background: #fafafa;
  border: 1px solid #ccc;
  margin: 5px;
`
export const RegisterBar = styled.div`
  width: 59%;
  color: #333;
  background: #fafafa;
  border: 1px solid #ccc;
  margin: 5px;

  @media (max-width: 768px){
    width: 100%;
  }
`

export const SucessMsg = styled.div`
  text-align: center;
  color: #2b7515;
  font-size: 18px;
  background: #ecffd6;
  padding: 10px;
`

export const ErrorMsg = styled.div`
  text-align: center;
  padding: 10px;
  color: #ba3939;
  font-size: 18px;
  background: #ffe0e0;
  border: 1px solid #a33a3a;
`


// SERVICES
export const ServicesContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #1c2237;

@media screen and (max-width: 768px){
  height: 1400px;
}

@media screen and (max-width: 480px){
  height: 1400px;
}
`

export const ServicesWrapper = styled.div`
max-width: 1200px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px){
  grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px){
  grid-template-columns: 1fr;
  padding: 0 20px;
}
`

export const ServicesCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 400px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2 ease-in-out;

&:hover{
  transform: scale(1.02);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
`

export const ServicesIcon = styled.img`
height: 400px;
width: 250px;
margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
text-align: center;
font-size: 50px;
color: #fff;
margin-bottom: 64px;

@media screen and (max-width: 480px){
  font-size: 2rem;
}
`

export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`

export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
`

export const ServicesSpan = styled.span`
color: #e7d640;
`



// NAVBAR
export const Nav = styled.div`
width: 100%;
background: #fff;
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
box-shadow: 0 3px 10px rgb(146 161 176 / 15%);

@media screen and(max-width: 960px){
  transition: 0ms.8s all ease;
}
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`

export const NavLogo = styled(LinkRouter)`
color: #000;
justify-self: flex-start;
cursor: pointer;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
font-size: 20px;
`

export const LogoImg = styled.img`
width: 25%;

`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 900px){
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 900px){
  display: none;
}
`

export const NavItem = styled.li`
height: 80px;
`

export const NavLinks = styled(LinkScroll)`
color: #000;
display: flex;
align-items:center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active{
  border-bottom: 3px solid #e7d640;
}
`

export const NavLinksRouter = styled(LinkRouter)`
color: #000;
display: flex;
align-items:center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active{
  border-bottom: 3px solid #e7d640;
}
`


export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 900px){
  display: none;
}
`

export const NavBtnLink = styled(LinkRouter)`
background: #fff;
white-space: nowrap;
padding: 10px 22px;
color: #000;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.6s ease-in-out;
text-decoration: none;

&:hover{
  border-radius: 5px;
  transition: all 0.6s ease-in-out;
  background: #f7e756;
  color: #010606;
}
`

// SIDEBAR/MOBILE
export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #1c2237;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
z-index: 999;
`

export const CloseIcon = styled(FaTimes)`
color: #000;
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const SidebarWrapper = styled.div`
color: #fff;

`

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media screen and (max-width: 480px){
  grid-template-rows: repeat(6, 60px);
}

`

export const SidebarLink = styled(LinkScroll)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.6s ease-in-out;
color: #fff;
cursor: pointer;

&:hover{
  color: #f7e756;
  transition: 0.6s ease-in-out;
}
`

export const SidebarLinkRouter = styled(LinkRouter)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.6s ease-in-out;
color: #fff;
cursor: pointer;

&:hover{
  color: #f7e756;
  transition: 0.6s ease-in-out;
}
`

export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`

export const SidebarRoute = styled(LinkRouter)`
border-radius: 5px;
background: transparent;
white-space: nowrap;
padding: 16px 64px;
color: #fff;
font-size: 1.5rem;
outline: none;
border:none;
cursor: pointer;
transition: all 0.6s ease-in-out;
text-decoration: none;

&:hover{
  transition: all 0.6s ease-in-out;
  background: #f7e756;
  color: #010606;
}
`
export const LogoutBtn = styled.button`
background: transparent;
white-space: nowrap;
color: #e65061;
padding:5px;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.6s ease-in-out;
text-decoration: none;
border-radius: 5px;

&:hover{
  border-radius: 5px;
  transition: all 0.6s ease-in-out;
  background: #f7e756;
  color: #010606;
}
`
