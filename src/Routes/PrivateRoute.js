import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from "@/Context/AuthContext"

const PrivateRoutes = ({ component: Component, ...rest }) => {

  const { loggedIn } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={props =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      } />
  )
}

export default PrivateRoutes
