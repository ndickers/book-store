import { reducer } from "../Reducer";
import { useReducer, useEffect } from "react";
import { TBook, TAction } from "../types.ts";

const storageData: null | string = localStorage.getItem("books");
let initialData: TBook[] = [];
if (storageData !== null) {
  initialData = JSON.parse(storageData);
}

export function useLocalStorage(): [TBook[], React.Dispatch<TAction>] {
  const [books, dispatch] = useReducer(reducer, initialData);
  //[{ id: 1, title: "way of superior man", author: "Robert green", year: 2022 }]
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return [books, dispatch];
}
