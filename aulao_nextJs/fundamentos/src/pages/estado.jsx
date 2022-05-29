import { useState } from "react"
import Layout from "../components/Layout"

export default function Estado() {

    // Primeira maneira
    // ==============================
    const state = useState(0)
    let numero = state[0]
    let alterarNumero = state[1]

    function incrementar() {
        alterarNumero(numero + 1)
    }
    // ==============================
    
    // Segunda maneira
    // ==============================
    const [num, setNum] = useState(0)

    function segundoIncrementar() {
        setNum(num + 1)
    }
    // ==============================

    return (
        <Layout titulo="Componente com estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
            <br />
            <div>{num}</div>
            <button onClick={segundoIncrementar}>Incrementar</button>
        </Layout>
    )
}