import { useState } from "react"
import { useFormik } from "formik"
import { FieldContainer, Container, ErrorMsg, SucessMsg, RegisterBar } from "../../components/StyledComponents"
import { CustomButton } from "../../components/Buttons/Button"
import * as yup from "yup"
import api from "../../services/api"


const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

const validationSchema = yup.object({
  name: yup.string().min(3, "Por favor, digite o seu nome").required("É necessário informar o nome completo"),
  email: yup.string().email("Por favor, digite um email válido!").required("É necessário informar um email"),
  password: yup.string().matches(passwordRegex, "Digite uma senha mais forte").required("Informe uma senha forte"),
  confirmPassword: yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf([yup.ref("password")], "As senhas não conferem!"),
  }),
})

const RegisterForm = () => {

  const [sucess, setSucess] = useState(null)
  const [error, setError] = useState(null)


  const onSubmit = async (values) => {
    const { confirmPassword, ...data } = values

    const response = await api.post("register", data).catch((err) => {
      if (err && err.response) {
        setError(err.response.data.message)
        setSucess(null)
      }
    })
    if (response && response.data) {
      setError(null)
      setSucess(response.data.message)
      // history.push("/login")
      formik.resetForm()
    }


  }

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", confirmPassword: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  })

  return (
    <Container>
      <h1 className="titulo">
        Faça seu <span className="span">Cadastro</span>!
      </h1>

      {sucess ? <RegisterBar><SucessMsg>{sucess ? sucess : ""}</SucessMsg></RegisterBar> : ""}
      {error ? <RegisterBar><ErrorMsg>{error ? error : ""}</ErrorMsg></RegisterBar> : ""}

      <div className="register-container">
        <form onSubmit={formik.handleSubmit}>
          <FieldContainer>
            <label>Nome Completo</label>
            <input
              type="text"
              placeholder="Digite o seu nome completo"
              name="name"
              required
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span className="error">{formik.touched.name && formik.errors.name ? formik.errors.name : ""}</span>
          </FieldContainer>

          <FieldContainer>
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              name="email"
              required
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span className="error">{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</span>
          </FieldContainer>

          <FieldContainer>
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite a sua senha"
              name="password"
              required
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span className="error">
              {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
            </span>
          </FieldContainer>

          <FieldContainer>
            <label>Confirmação de senha</label>
            <input
              type="password"
              placeholder="Confirme a sua senha"
              name="confirmPassword"
              required
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span className="error">
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : ""}
            </span>
          </FieldContainer>

          <CustomButton>Registrar</CustomButton>
        </form>
      </div>

    </Container>
  )
}

export default RegisterForm
