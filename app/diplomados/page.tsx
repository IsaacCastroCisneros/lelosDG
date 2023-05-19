import { Banner, MostrarCards, Stripe } from "@/components/Servicios";

export default function Diplomados() {
    return(
        <>
            <Banner tipo="Diplomados" />
            <Stripe />
            <MostrarCards program="diplomados" />
        </>
    )
}
