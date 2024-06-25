export default function Book({ id, title, author, year, onDelete }) {
  return (
    <article key={id}>
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-2xl">{title}</h2>
        <div>
          <button className="btn-atyle" onClick={() => onDelete(id)}>
            delete
          </button>
          <button className="btn-atyle ml-1">edit</button>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-lg">{author}</p>
        <p>{year}</p>
      </div>
    </article>
  );
}
