import { useEffect, useState } from "react"
import axios from "axios"


const useGetCotations = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [dolar, setDolar] = useState()
    const [euro, setEuro] = useState()
    const [yuan, setYuan] = useState()

    useEffect(() => {
        axios.get("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,CNY-BRL").then((response) => {

            setError(null)
            setLoading(false)
            setDolar(response.data.USDBRL)
            setEuro(response.data.EURBRL)
            setYuan(response.data.CNYBRL)

            
        }).catch((error) => {

            setLoading(false)
            setError(error.message)
            setDolar(null)
            setEuro(null)
            setYuan(null)


        })

    }, [])

    return { loading, error, dolar, euro, yuan }
}

export default useGetCotations