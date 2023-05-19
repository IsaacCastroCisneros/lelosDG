import { Banner, MostrarCards, Stripe } from "@/components/Servicios";

export default function Driplomas() {
    return(
        <>
            <Banner tipo="Diplomas" />
            <Stripe />
            <MostrarCards program="diplomas" />
        </>
    )
}
