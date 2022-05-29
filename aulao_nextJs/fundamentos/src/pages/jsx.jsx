import Layout from "../components/Layout"

export default function Jsx() {
    const titulo = <h1>Titulo em constante</h1>

    function subtitulo () {
        return <h2>Subtitulo em Função</h2>
    }
    return (
        <Layout titulo="Entendendo JSX">
            <h1>JSX é um conceito central</h1>
            {titulo} <br />
            {subtitulo()} <br />
            {Math.random()} <br />
            {"olá".toUpperCase()} <br />
            <p>
                {JSON.stringify({nome: "Natan", idade: 22})}
            </p>
        </Layout>
    )
}