import Link from "next/link"

function NotFoundPage() {
    return (
        <div className=" w-full flex-col h-screen flex items-center justify-center">

            <div className=" flex flex-col items-center gap-3">

                Perdido? Te doy una mano!
                <br />
                <Link href='/'>
                    <button className="rounded bg-red-300 px-2 py-1">Volver</button>
                </Link>
            </div>
            <br />
            <div className="text-center">
                < h2 className="font-bold">
                    Agradecimientos:
                    <hr />
                </h2>
                <ul>
                    <li>Fernando Herrera</li>
                    <li>MiduDev </li>
                    <li className="italic">
                        A todos los maestros que (me han ) <span className="line-through">he</span>  encontrado en el camino...
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default NotFoundPage