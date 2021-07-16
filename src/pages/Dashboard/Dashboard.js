import { useState } from "react"
import Sidebar from "@/pages/Dashboard/sidebar/Sidebar"
import Navbar from "@/pages/Dashboard/navbar/Navbar"
import Main from "@/pages/Dashboard/main/Main"
import "./index.css"

const Dashboard = () => {

  const [sideBarOpen, setSideBarOpen] = useState(false)

  const openSideBar = () => {
    setSideBarOpen(true)
  }
  const closeSideBar = () =>{
    setSideBarOpen(false)
  }

  return (
    <div className="container-dashboard">
      <Navbar sideBarOpen={sideBarOpen} openSideBar={openSideBar}/>
      <Main />
      <Sidebar sideBarOpen={sideBarOpen} closeSideBar={closeSideBar}/>
    </div>
  );
}

export default Dashboard;
