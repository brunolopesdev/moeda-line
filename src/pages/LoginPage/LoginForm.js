import { useState, useContext } from "react"
import { useFormik } from "formik"
import { FieldContainer, Container, RegisterBar, ErrorMsg } from "../../components/StyledComponents"
import { useHistory } from "react-router-dom"
import { CustomButton } from "../../components/Buttons/Button"
import AuthContext from "../../Context/AuthContext"
import api from "../../services/api"
import * as yup from "yup"



const validationSchema = yup.object({
  email: yup.string().required("É necessário digitar um email"),
  password: yup.string().required("É necessário digitar a senha")
})

const LoginForm = () => {

  const { getLoggedIn, getUserName } = useContext(AuthContext)

  const history = useHistory()

  const [error, setError] = useState(null)

  const onSubmit = async (values) => {
    setError(null)
    const response = await api.post("login", values).catch((err) => {
      if (err && err.response)
        setError(err.response.data.message)
    })
    if (response.data) {
      localStorage.setItem("token", response.data.token)
      getLoggedIn()
      getUserName()
      history.push("/dashboard")
      window.location.reload()
    }
  }

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  })

  return (
    <Container>
      <h1 className="titulo">
        Faça seu <span className="span">Login</span>!
      </h1>

      {error ? <RegisterBar><ErrorMsg>{error ? error : ""}</ErrorMsg></RegisterBar> : ""}

      <div className="login-container">
        <form onSubmit={formik.handleSubmit}>
          <FieldContainer>
            <label>Email</label>
            <input type="email"
              placeholder="Digite seu email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} />
            <span className="error">{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</span>
          </FieldContainer>

          <FieldContainer>
            <label>Password</label>
            <input type="password"
              placeholder="Digite a sua senha"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} />
            <span className="error">{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</span>
          </FieldContainer>

          <CustomButton>Entrar</CustomButton>
          <label>
            <input type="checkbox" name="remember" /> Manter logado
          </label>
          <span className="psw">Esqueceu a <a >senha?</a></span>
        </form>

      </div>
    </Container>
  )
}

export default LoginForm



