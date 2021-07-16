import { Route, Redirect } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthContext from '@/Context/AuthContext';
import Navbar from "@/components/Navbar/Navbar"
import Sidebar from '@/components/Navbar/Sidebar';
import Footer from '@/components/Footer/Footer';

const PublicRoute = ({ component: Component, restricted, ...rest }, props) => {

  const { loggedIn } = useContext(AuthContext)

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Route
      {...rest}
      render={props =>
        loggedIn && restricted ?
          <Redirect to="dashboard" />
          :
          <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Component {...props} />
            <Footer />
          </>
      }
    />
  )
}

export default PublicRoute