export interface TBook {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  titleVal: string;
  authorVal: string;
  yearVal: number;
  id: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isEdit: { edit: boolean };
}
export default function Form({
  onSubmit,
  titleVal,
  authorVal,
  yearVal,
  onChange,
  isEdit,
}: TBook) {
  return (
    <form onSubmit={onSubmit} className=" mx-auto " action="">
      <input
        className="input-style"
        type="text"
        name="title"
        value={titleVal}
        onChange={onChange}
        placeholder="title"
      />
      <br />
      <input
        className="input-style"
        type="text"
        name="author"
        value={authorVal}
        onChange={onChange}
        placeholder="author"
      />
      <br />
      <input
        className="input-style"
        type="number"
        name="year"
        value={yearVal}
        onChange={onChange}
        placeholder="publication year"
      />
      <br />
      <button className="bg-blue-400 rounded-md text-white px-4 py-2">
        {isEdit.edit ? "update book" : "add book"}
      </button>
    </form>
  );
}
