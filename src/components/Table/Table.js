import AuthContext from "@/Context/AuthContext";
import AddTransactionModal from "@/pages/Dashboard/AddTransaction/AddTransactionModal"
import { Link } from "react-router-dom"
import { useGetTransactions } from "@/hooks"
import { useContext } from "react";
import "./style.css"



export const Table = () => {

	const { data, } = useGetTransactions()
	const { deleteTransaction } = useContext(AuthContext)

	return (
		<main>
			<table className="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Valor</th>
						<th>Moeda</th>
						<th>Tipo</th>
						<th>Categoria</th>
						<th>Descrição</th>
						<th>Ações</th>
					</tr>
				</thead>
				<tbody>
					{data?.map((item) => (
						<tr key={item.id}>
							<td data-label="Valor">{item.id}</td>
							<td data-label="Valor">{item.valor}</td>
							<td data-label="Moeda">{item.moeda}</td>
							<td data-label="Tipo">{item.tipo}</td>
							<td data-label="Categoria">{item.categoria}</td>
							<td data-label="Descrição">{item.descricao}</td>
							<td>
								<a onClick={() => deleteTransaction(item.id)} style={{ cursor: "pointer", color: "#3ea175", paddingRight: "10px" }} ><i className="fa fa-trash-alt"></i></a>
								<Link to={`update/${item.id}`} style={{ cursor: "pointer", color: "#35a4ba" }}><i className="fa fa-edit"></i></Link>
							</td>
						</tr>
					))
					}
				</tbody>
			</table>
		</main>
	)
}




export const TableLast = () => {

	const { deleteTransaction, lastTransaction } = useContext(AuthContext)

	return (
		<main>
			<table className="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Valor</th>
						<th>Moeda</th>
						<th>Tipo</th>
						<th>Categoria</th>
						<th>Descrição</th>
					</tr>
				</thead>
				<tbody>
					{lastTransaction?.map((item) => (
						<tr key={item.id}>
							<td data-label="Valor">{item.id}</td>
							<td data-label="Valor">{item.valor}</td>
							<td data-label="Moeda">{item.moeda}</td>
							<td data-label="Tipo">{item.tipo}</td>
							<td data-label="Categoria">{item.categoria}</td>
							<td data-label="Descrição">{item.descricao}</td>
						</tr>
					))
					}
				</tbody>
			</table>
		</main>
	)
}

