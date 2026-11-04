export default function Publicacion({ userId, title, body }) {
  return (
    <article>
      <span>Usuario: {userId}</span>

      <h3>{title}</h3>

      <p>{body}</p>
    </article>
  );
}
