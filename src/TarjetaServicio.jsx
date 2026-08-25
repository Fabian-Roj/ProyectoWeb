function TarjetaServicio(props) {
    return (
        <article className="tarjeta-servicio">
            <span className="tarjeta-servicio__icono">{props.icono}</span>
            <h3>{props.titulo}</h3>
            <p>{props.descripcion}</p>
        </article>
    );
}
export default TarjetaServicio;