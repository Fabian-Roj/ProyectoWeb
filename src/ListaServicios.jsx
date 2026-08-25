import TarjetaServicio from "./TarjetaServicio";

const servicios = [
    { id: 1, icono: "👤", titulo: "Nombre", descripcion: "ingrese su nombre completo" },
    { id: 2, icono: "📧", titulo: "Correo", descripcion: "formato: ejemplo@tipo_cuenta.cl"},
    { id: 3, icono: "📨", titulo: "Mensaje", descripcion: "Que desea enviar"}
     // completar con los datos reales de la landing page
];
function ListaServicios() {
    // completar: renderizado condicional + .map()
    if (servicios.length === 0){
        <p>No hay servicion activos actualmente</p>
    } else {
        return (
            <section className="lista-servicios">
                {servicios.map((servicio) => (
                    <TarjetaServicio
                        key={servicio.id}
                        icono={servicio.icono}
                        titulo={servicio.titulo}
                        descripcion={servicio.descripcion}
                    />
                ))}
            </section>
        );
    }
}
export default ListaServicios;