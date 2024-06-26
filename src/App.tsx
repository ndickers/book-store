import { ChangeEvent, useState, useEffect } from "react";
import Form from "./components/Form";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Book from "./components/Book";
import { TBook, TEdit } from "./types.ts";

function App() {
  const [formData, setFormData] = useState<TBook>({
    title: "",
    author: "",
    year: 0,
    id: 1,
  });
  const [isEdit, setIsEdit] = useState<TEdit>({
    id: null,
    edit: false,
  });
  const [books, dispatch] = useLocalStorage();
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    if (isEdit.edit) {
      const dataToEdit: TBook | undefined = books.find(
        (book) => book.id === isEdit.id
      );
      if (dataToEdit !== undefined) {
        setFormData(dataToEdit);
      }
    }
  }, [isEdit]);
  function handleFormChange({ target }: ChangeEvent<HTMLInputElement>) {
    setFormData((prevData) => ({ ...prevData, [target?.name]: target?.value }));
  }
  function searching(bookTitle: string, bookList: TBook[]) {
    if (bookTitle) {
      return bookList.filter(({ title }: TBook) =>
        title.toLowerCase().includes(bookTitle.toLowerCase())
      );
    }
    return bookList;
  }

  const filterBooks = searching(searchTitle, books);
  const booksElems = filterBooks.map((book) => (
    <Book
      key={book.id}
      deleteDispatch={dispatch}
      id={book.id as number}
      setIsEdit={setIsEdit}
      title={book.title}
      author={book.author}
      year={book.year}
    />
  ));

  return (
    <div className="pt-8 max-w-[20rem] mx-auto">
      <div>
        <Form
          titleVal={formData.title}
          authorVal={formData.author}
          isEdit={isEdit}
          yearVal={formData.year}
          onChange={handleFormChange}
          onSubmit={(e) => {
            e.preventDefault();
            if (isEdit.edit && isEdit.id !== null) {
              dispatch({
                type: "edit book",
                payload: { id: isEdit.id, data: formData },
              });
              setIsEdit((prevEdit) => ({ ...prevEdit, edit: false }));
            } else {
              dispatch({
                type: "add-note",
                payload: { ...formData, id: books.length + 1 },
              });
              setFormData({ title: "", author: "", year: 0 });
            }
          }}
        />
        <input
          className="my-3 p-2 w-full"
          onChange={(e) => {
            setSearchTitle(e.target.value);
          }}
          value={searchTitle}
          type="text"
          name="search"
          placeholder="Search book title"
        />
        <div>{booksElems}</div>
      </div>
    </div>
  );
}

export default App;
