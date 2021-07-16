import { useContext } from "react"
import { useGetCotations, useGeoLocation } from "@/hooks/"
import { TableLast } from "@/components/Table/Table"
import hello from "@/assets/hello3.svg"
import wallet from "@/assets/wallet.svg"
import AuthContext from "@/Context/AuthContext"
import "./Main.css"

const Main = () => {
  const { loading, error, dolar, euro, yuan } = useGetCotations()
  const location = useGeoLocation()

  const { userName, totalTransacoes, totalEarnings, totalCategories, lastTransaction } = useContext(AuthContext)

  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Olá, {userName}!</h1>
            <p>Bem-vindo a sua dashboard.</p>
          </div>
        </div>
        <div className="main__cards">
          <div className="card">
            <i className="fa fa-file-alt fa-2x text-lightblue"></i>
            <div className="card-inner">
              <p className="text-primary-p">Número de transações</p>
              <span className="font=bold text-title">{totalTransacoes}</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-archive fa-2x text-red"></i>
            <div className="card-inner">
              <p className="text-primary-p">Valor total</p>
              <span className="font-bold text-title">R${totalEarnings}</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-archive fa-2x text-yellow"></i>
            <div className="card-inner">
              <p className="text-primary-p">Número de saídas</p>
              <span className="font-bold text-title"></span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-bars fa-2x text-green"></i>
            <div className="card-inner">
              <p className="text-primary-p">Categorias</p>
              <span className="font=bold text-title">{totalCategories}</span>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Ultimas Transações</h1>
                <p>São Paulo, SP</p>
              </div>
              <i className="fa fa-money-bill-alt"></i>
            </div>
            <div style={{ marginTop: "35px" }}>
              <TableLast />
            </div>
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Cotação em tempo real</h1>
                <p>São Paulo, SP</p>
              </div>
              <i className="fa fa-money-bill-alt"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Valor Dólar</h1>
                {!loading && error && <p>...</p>}
                {!loading && dolar && <p>R${dolar.high} </p>}
              </div>
              <div className="card2">
                <h1>Valor Euro</h1>
                {!loading && error && <p>...</p>}
                {!loading && euro && <p>R${euro.high} </p>}
              </div>

              <div className="card3">
                <h1>Valor Yuan</h1>
                {!loading && error && <p>...</p>}
                {!loading && yuan && <p>R${yuan.high} </p>}
              </div>

              <div className="card4">
                <img src={wallet} alt="Carteira" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
