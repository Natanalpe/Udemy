interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valo: any) => void
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className={`
            flex flex-col ${props.className}
            mb-2
        `}>
            <label className="mb-4">
                {props.texto}
            </label>
            {/* Caso não tenha sido informado o tipo
                o padrão será 'text'
            */}
            <input
                onChange={e => props.valorMudou?.(e.target.value)}
                className={`
                border-purple-500 rounded-lg
                focus:outline-none bg-gray-50
                px-4 py-2
                ${props.somenteLeitura ? '' : "focus:bg-white"}
            `}
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
            />
        </div>
    )
}