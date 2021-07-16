import { useState } from "react"
import Sidebar from "@/pages/Dashboard/sidebar/Sidebar"
import Navbar from "@/pages/Dashboard/navbar/Navbar"
import { Table } from "@/components/Table/Table"
import "./index.css"
import { useGetTransactions } from "@/hooks"

const Dashboard = () => {

  const [sideBarOpen, setSideBarOpen] = useState(false)

  const openSideBar = () => {
    setSideBarOpen(true)
  }
  const closeSideBar = () => {
    setSideBarOpen(false)
  }

  return (
    <div className="container-dashboard">
      <Navbar sideBarOpen={sideBarOpen} openSideBar={openSideBar} />
      <Table />
      <Sidebar sideBarOpen={sideBarOpen} closeSideBar={closeSideBar} />
    </div>
  );
}

export default Dashboard;
