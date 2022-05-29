import Navegador from "../components/Navegador"

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh',
        }}>
            <Navegador destino="/estiloso" titulo="Estiloso" cor='crimson'/> <br />
            <Navegador destino="/exemplo" titulo="Exemplo"/> <br />
            <Navegador destino="/jsx" titulo="JSX" cor='#9400d3'/>
            <Navegador destino="/navegacao" titulo="Navegação #01" cor='#d32a00'/>
            <Navegador destino="/cliente/sp-2/245" titulo="Navegação #02" cor='#d30012'/>
            <Navegador destino="/estado" titulo="Componente com Estado" cor='#dd00cb'/>
            <Navegador destino="/integracao_1" titulo="Integração com API #01" cor='#00a8a3'/>
            <Navegador destino="/estatico" titulo="Conteudo estático" cor='#fa04a4'/>

        </div>
    )
}