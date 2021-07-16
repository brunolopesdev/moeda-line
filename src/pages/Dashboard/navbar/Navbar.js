import "./Navbar.css";
import UserConfig from "@/pages/Dashboard/navbar/UserConfig";
import AddTransactionModal from "../AddTransaction/AddTransactionModal";
import { Button } from "@material-ui/core";

const Navbar = ({ openSideBar, sideBarOpen }) => {
  return (
    <nav className="navbar-dashboard">
      <div className="nav_icon-dashboard" onClick={() => openSideBar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>

      <div className="navbar__left">
        <a href="#">Produtos</a>
        <a href="#">Usuários</a>
        <a href="#" className="active_link">
          Admin
        </a>
      </div>

      <div className="navbar__right">
        <AddTransactionModal>
        <Button variant="outlined" style={{marginRight: "5px"}}>
      <i className="fa fa-plus" style={{padding: "5px"}}></i>Nova Transação
      </Button>
        </AddTransactionModal>
        <UserConfig />

      </div>
    </nav>
  );
};

export default Navbar;
