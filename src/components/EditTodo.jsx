import "../css/EditTodo.css";
import { useRef, useState } from "react";
export function EditTodo({
  setShowEditModal,
  todos,
  index,
  editButtonHandler,
  darkMode,
}) {
  const [empty,setEmpty] = useState(false);
  const editRef = useRef();
    

  const cancelHandler = () => {
    setShowEditModal(false);
  };

  const doneHandler = () => {
    const newTitle = editRef.current.value.trim();
    if (newTitle === "") return setEmpty(true);
    editButtonHandler(index, newTitle);
    setShowEditModal(false);
  };
  return (
    <div className="edit-todo-background">
      <div className={darkMode?"add-todo-box-dark" : "add-todo-box"}>
        <h1 className={darkMode? 'title-box-dark' : 'title-box'}>Edit</h1>
        <input
          ref={editRef}
          type="text"
          defaultValue={todos[index].text}
          placeholder="Edit your note..."
          className={darkMode? 'search-field-dark' : 'add-todo-input'}
        />
        {empty && <p className="error-message">Please enter your note</p>}
        <div className="edit-buttons">
          <button
            className="cancel-edit addB cancel-button"
            onClick={cancelHandler}
          >
            CANCEL
          </button>
          <button className="done-edit addB apply-button" onClick={doneHandler}>
            DONE
          </button>
        </div>
      </div>
    </div>
  );
}
