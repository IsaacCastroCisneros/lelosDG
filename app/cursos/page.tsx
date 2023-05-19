import { Banner, MostrarCards, Stripe } from "@/components/Servicios";
import cursos from './cursos.module.css'

export default function Cursos() {
    return(
        <>
            <Banner tipo="Cursos" />
            <Stripe />
            <MostrarCards program="cursos" />
            <h1 className={cursos.hola}>Hola</h1>
        </>
    )
}
