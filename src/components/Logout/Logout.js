import { useContext } from "react"
import { useHistory } from "react-router-dom"
import { LogoutBtn } from "@/components/StyledComponents"
import AuthContext from "@/Context/AuthContext";
import api from "@/services/api";



import React from 'react'

const Logout = () => {
    const history = useHistory()
    const { getLoggedIn, getUserName } = useContext(AuthContext)

    async function logOut() {
        await api.get("login/logout")
        await getLoggedIn()
        await getUserName()
        history.push("/login")
    }

    return (
        <LogoutBtn>
            <a onClick={logOut}>
                Sair
            </a>
        </LogoutBtn>
    )
}

export default Logout



