import Publicacion from "./Publicacion";

export default function ListaPublicaciones({ publicaciones = [] }) {
  return (
    <section>
      {publicaciones.length ? (
        publicaciones.map((publicacion) => {
          return (
            <Publicacion
              userId={publicacion.userId}
              title={publicacion.title}
              body={publicacion.body}
            />
          );
        })
      ) : (
        <p>Cargando</p>
      )}
    </section>
  );
}
