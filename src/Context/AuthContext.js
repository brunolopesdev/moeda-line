import React, { createContext, useState, useEffect } from "react"
import api from "../services/api"
import jwt_decode from "jwt-decode"
import { useHistory } from "react-router-dom"

const AuthContext = createContext()

function AuthContextProvider(props) {

	const history = useHistory()

	const [loggedIn, setLoggedIn] = useState(undefined)
	const [data, setData] = useState()
	const [userName, setUserName] = useState("")
	const [userId, setUserId] = useState("")
	const [userToken, setUserToken] = useState("")
	const [totalEarnings, setTotalEarnings] = useState("")
	const [totalCategories, setTotalCategories] = useState("")
	const [totalTransacoes, setTotalTransacoes] = useState("")
	const [lastTransaction, setLastTransaction] = useState([])


	// update
	async function updateTransaction(id) {
		console.log(id)
		history.push(`/update/${id}`)
	}

	// deletar transação
	async function deleteTransaction(id) {
		await api.delete(`/delete/${id}`)
		setData(data.filter((value) => {
			return value.id != id
		}))
		window.location.reload()
	}

	// listar ultimas 4 transações
	async function findLastestTransactions() {
		const response = await api.get("/transaction/listone")
		setLastTransaction(response.data)
		return lastTransaction
	}

	// listar todas as transações
	async function getData() {
		const token = await getToken()
		const res = await api.get("transaction/list")
		setData(res.data)

		// somar o valor total das trasações encontradas
		const valorDasTransacoes = []
		res.data.map(x => {
			valorDasTransacoes.push(Number(x.valor));
			return valorDasTransacoes
		})
		let somaDosValores = valorDasTransacoes.reduce((prev, cur) => {
			return prev + cur
		}, 0)

		setTotalEarnings(somaDosValores)

		// listar e somar quantidade de categorias e total de transações
		const qtdCategorias = []
		res.data.map(x => {
			qtdCategorias.push(x.categoria);
			return qtdCategorias
		})
		setTotalCategories(qtdCategorias.length)

		let qtdTransacoes = res.data.length

		setTotalTransacoes(qtdTransacoes)

		return { data, totalTransacoes, totalCategories, totalEarnings }
	}


	// buscar token do usuário logado
	async function getToken() {
		const response = await api.get("login/token")
		setUserToken(response.data)

		return userToken
	}


	// buscar nome do usuário logado
	async function getUserName() {
		const response = await api.get("login/token")
		let token = response.data

		if (token) {
			let decoded = jwt_decode(token)
			setUserName(decoded.name)
			setUserId(decoded.id)
			return { userName, userId }
		} else {
			setUserName("")
		}
	}

	// verificar se existe usuário logado
	async function getLoggedIn() {
		const response = await api.get("login/loggedin")
		setLoggedIn(response.data)
	}

	useEffect(() => {
		getLoggedIn()
		getUserName()
		getData()
		getToken()
		findLastestTransactions()

	}, [])

	return (
		<AuthContext.Provider value={{
			loggedIn,
			getLoggedIn,
			getUserName,
			userName,
			totalEarnings,
			getToken,
			totalEarnings,
			totalCategories,
			totalTransacoes,
			data,
			deleteTransaction,
			updateTransaction,
			lastTransaction,
			userId
		}}>
			{props.children}
		</AuthContext.Provider>
	)

}

export default AuthContext
export { AuthContextProvider }