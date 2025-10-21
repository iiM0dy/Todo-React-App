import { useRef, useState } from "react";
import "../css/AddTodo.css";
export function AddTodo({ setShowModal, todos, setTodos,darkMode }) {
  const inputRef = useRef();

  const cancelHandler = () => {
    setShowModal(false);
  };

  const [empty,setEmpty] = useState(false);

  const applyHandler = () => {
    const text = inputRef.current.value;
    if (text.trim() === "") return setEmpty(true);
    const newTodo = { completed: false, text };
    setTodos([...todos, newTodo]);
    setShowModal(false);
    inputRef.current.value = "";
  };

  return (
    <div className="add-todo-container">
      <div className={darkMode?"add-todo-box-dark" : "add-todo-box"}>
        <h1 className={darkMode? 'title-box-dark' : 'title-box'}>NEW NOTE</h1>
        <input
          ref={inputRef}
          type="text"
          placeholder="Type your note..."
          className={darkMode? 'search-field-dark' : 'add-todo-input'}
        />
        {empty && <p className="error-message">Please enter your note</p>}
        <div className="add-todo-buttons">
          <button className="cancel-button addB" onClick={cancelHandler}>
            CANCEL
          </button>
          <button className="apply-button addB" onClick={applyHandler}>
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
}
