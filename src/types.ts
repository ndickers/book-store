export interface TBook {
  id?: number;
  title: string;
  author: string;
  year: number;
}

interface AddNoteAction {
  type: "add-note";
  payload: TBook;
}

interface DeleteAction {
  type: "delete";
  payload: {
    bookId: number;
  };
}

interface EditBookAction {
  type: "edit book";
  payload: {
    id: number;
    data: TBook;
  };
}

export type TAction = AddNoteAction | DeleteAction | EditBookAction;
export interface TEdit {
  id: number | null;
  edit: boolean;
}
