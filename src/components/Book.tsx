import { TAction, TEdit } from "../types.ts";

interface TBook {
  id: number;
  title: string;
  author: string;
  year: number;
  deleteDispatch: (action: TAction) => void;
  setIsEdit: (editState: TEdit) => void;
}

export default function Book({
  id,
  title,
  author,
  year,
  deleteDispatch,
  setIsEdit,
}: TBook) {
  return (
    <article key={id}>
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-2xl">{title}</h2>
        <div>
          <button
            className="btn-atyle"
            onClick={() => {
              deleteDispatch({ type: "delete", payload: { bookId: id } });
            }}
          >
            delete
          </button>
          <button
            className="btn-atyle ml-1"
            onClick={() => setIsEdit({ id: id, edit: true })}
          >
            edit
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-lg">{author}</p>
        <p>{year}</p>
      </div>
    </article>
  );
}
