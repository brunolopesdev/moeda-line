import React, { useState } from "react"
import { useFormik } from "formik"
import { useHistory, useParams, withRouter } from 'react-router-dom';
import { Bar, Container, ErrorMsg, FieldContainer, MeuBotao, SucessMsg } from '../../../components/StyledComponents';
import api from "../../../services/api"

const EditTransaction = (props) => {

  const history = useHistory()
  const [error, setError] = useState(null)
  const [sucess, setSucess] = useState(null)

  const onSubmit = async (values) => {
    const { ...data } = values
    let id = props.match.params.id

    const response = await api.put(`transaction/update/${id}`, data)
      .catch((err) => {
        if (err && err.response) {
          setError(err.response.data.message)
          setSucess(null)
        }
      })
    if (response && response.data) {
      setError(null)
      setSucess(response.data.message)
      history.push("/transactions")
      window.location.reload()
      formik.resetForm()
    }

  }

  const formik = useFormik({
    initialValues: { tipo: "", valor: "", categoria: "", moeda: "", descricao: "" },
    validateOnBlur: true,
    onSubmit,
    // validationSchema: validationSchema,
  })

  return (

    <main>

      <>
        {sucess ? <Bar><SucessMsg>{sucess ? sucess : ""}</SucessMsg></Bar> : ""}
        {error ? <Bar><ErrorMsg>{error ? error : ""}</ErrorMsg></Bar> : ""}

        <form onSubmit={formik.handleSubmit}>

          <FieldContainer>
            <label>Descrição</label>
            <input
              type="text"
              placeholder="Descrição"
              name="descricao"
              required
              value={formik.values.descricao}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FieldContainer>

          <FieldContainer>
            <label>Valor</label>
            <input
              type="text"
              placeholder="Valor"
              name="valor"
              required
              value={formik.values.valor}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FieldContainer>

          <FieldContainer>
            <label>Moeda</label>
            <select
              name="moeda"
              value={formik.values.moeda}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" label="Selecione a moeda">
                Selecione a moeda
              </option>
              <option value="Dolar" label="Dolar">
                Dolar
              </option>
              <option value="Euro" label="Euro">
                Euro
              </option>
              <option value="Real" label="Real">
                Real
              </option>
            </select>
          </FieldContainer>

          <FieldContainer>
            <label>Categoria</label>
            <select
              name="categoria"
              value={formik.values.categoria}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" label="Selecione a categoria">
                Selecione{" "}
              </option>
              <option value="Recebimento de venda" label="Recebimento de venda">
                Recebimento de venda
              </option>
              <option value="Pagamento de dívida" label="Pagamento de dívida">
                Pagamento de dívida
              </option>
              <option value="Pagamento de fornecedor" label="Pagamento de fornecedor">
                Pagamento de fornecedor
              </option>
              <option value="Pagamento de funcionários" label="Pagamento de funcionários">
                Pagamento de funcionários
              </option>
              <option value="Viagem de trabalho" label="Viagem de trabalho">
                Viagem de trabalho
              </option>
            </select>
          </FieldContainer>

          <FieldContainer>
            <label>Entrada ou Saída</label>
            <select
              name="tipo"
              value={formik.values.tipo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" label="Selecione o tipo da transação">
                Selecione
              </option>
              <option value="Entrada" label="Entrada">
                Entrada
              </option>
              <option value="Saída" label="Saída">
                Saída
              </option>
            </select>
          </FieldContainer>

          <MeuBotao type="submit">Enviar</MeuBotao>
        </form>
      </>
    </main>
  );
}


export default withRouter(EditTransaction)