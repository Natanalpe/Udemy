import Titulo from "./Titulo"

// Irá exigir obrigatorimente que se passe
// as props dentro de LayoutProps
interface LayoutProps {
    titulo: string
    children: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-800 rounded-md
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-6 m-">
                {props.children}
            </div>
        </div>
    )
}