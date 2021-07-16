import { Link } from "react-router-dom"
import logo from "@/assets/logo.png"
import AddTransactionModal from "@/pages/Dashboard/AddTransaction/AddTransactionModal"
import DisplayTransactions from "@/pages/Dashboard/DisplayTransactions/DisplayTransactions"
import Logout from "@/components/Logout/Logout"
import "./Sidebar.css"


const Sidebar = ({ sideBarOpen, closeSideBar, }) => {

  return (
    <div className={sideBarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="Logo" />
          <h1>Dashboard</h1>
        </div>
        <i onClick={() => closeSideBar()} className="fa fa-times" id="sidebar__icon" area-hidden="true"></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-minus-square"></i>
          <Link to="/">Inicio</Link>
        </div>
        <h2>ADMIN</h2>
        <div className="sidebar__link">
          <i className="fa fa-tachometer-alt"></i>
          <Link to="dashboard">Área Administrativa</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <Link to="/transactions">Transações</Link>
          {/* <DisplayTransactions /> */}
        </div>
        <div className="sidebar__link">
          <i className="fa fa-cash-register"></i>
          <AddTransactionModal>Adicionar Transação</AddTransactionModal>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-folder-open"></i>
          <a href="#">Categorias</a>
        </div>
        <h2>PESSOAS</h2>
        <div className="sidebar__link">
          <i className="fa fa-male"></i>
          <a href="#">Administradores</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-circle"></i>
          <a href="#">Usuarios</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-money-bill-alt"></i>
          <a href="#">Pagamentos e Custos</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-tasks"></i>
          <a href="/about">A Plataforma</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-file-alt"></i>
          <a href="#">Politica de Privacidade</a>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <Logout />
        </div>

      </div>

    </div>
  )
}

export default Sidebar
