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
    <tr className="border-2 border-gray-500">
      <td className="td-style">{title}</td>
      <td className="td-style">{author}</td>
      <td className="td-style">{year}</td>
      <td className="td-style">
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
      </td>
    </tr>
  );
}
