import { ComponentCapacitarte, ComponentCertificacion, ComponentDocente, ComponentTestimonios, ComponentVacante, ComponentWhats, ComponentsPagos, Contenido, Header, InfoAdicional } from "@/components/ServiciosName";

export default function DiplomadosNombre() {
    return (
        <>
            <Header />
            <InfoAdicional />
            <Contenido />
            <ComponentCertificacion />
            <ComponentDocente />
            <ComponentCapacitarte />
            <ComponentsPagos />
            <ComponentWhats />
            <ComponentTestimonios />
            <ComponentVacante />
        </>
    )
}