import { useState, useReducer } from "react";
import Form from "./components/Form";
import Book from "./components/Book";
function reducer(state, action) {
  switch (action.type) {
    case "add-note":
      return [...state, action.payload];
    case "delete":
      return state.filter((book) => book.id !== action.payload.bookId);
    default:
      break;
  }
}

function App() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: 0,
    id: 1,
  });
  const [books, dispatch] = useReducer(reducer, [
    { id: 1, title: "way of superior man", author: "Robert green", year: 2022 },
  ]);

  function handleFormChange({ target }) {
    setFormData((prevData) => ({ ...prevData, [target.name]: target.value }));
  }

  const booksElems = books.map((book) => (
    <Book
      onDelete={(id) => {
        dispatch({ type: "delete", payload: { bookId: id } });
      }}
      id={book.id}
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
          yearVal={formData.year}
          onChange={handleFormChange}
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({
              type: "add-note",
              payload: { ...formData, id: books.length + 1 },
            });
          }}
        />
        <div>{booksElems}</div>
      </div>
    </div>
  );
}

export default App;
