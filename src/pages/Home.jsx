import "../css/Home.css";
import { IoAdd } from "react-icons/io5";
import nightIcon from "../assets/Night.svg";
import { useState, useEffect } from "react";
import { AddTodo } from "../components/AddTodo";
import { EditTodo } from "../components/EditTodo";
import { HeaderTools } from "../components/HeaderTools";
import { TodoList } from "../components/TodoList";

export function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const [todos, setTodos] = useState([
    { text: "Note #1", completed: false },
    { text: "Note #2", completed: false },
    { text: "Note #3", completed: false },
  ]);

  const filteredTodos = todos
    .filter((todo) =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((todo) => {
      if (filter === "Complete") return todo.completed;
      if (filter === "Incomplete") return !todo.completed;
      return true;
    });

  const editButtonHandler = (index, newTitle) => {
    const updated = [...todos];
    updated[index].text = newTitle;
    setTodos(updated);
  };

  const handleItemDone = (index) => {
    const copyTodos = [...todos];
    copyTodos[index].completed = !copyTodos[index].completed;
    setTodos(copyTodos);
  };

  const handleDeleteItem = (index) => {
    const copyTodos = [...todos];
    copyTodos.splice(index, 1);
    setTodos(copyTodos);
  };

  const addButtonHandler = () => {
    setShowModal(true);
  };

  const turnDark = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="home-container">
      <h1 className={darkMode ? "title-dark" : "title"}>TODO LIST</h1>
      <HeaderTools
        setSearchTerm={setSearchTerm}
        setFilter={setFilter}
        darkMode={darkMode}
        filter={filter}
        turnDark={turnDark}
        nightIcon={nightIcon}
      />

      <TodoList
        filteredTodos={filteredTodos}
        darkMode={darkMode}
        handleItemDone={handleItemDone}
        setSelectedIndex={setSelectedIndex}
        setShowEditModal={setShowEditModal}
        handleDeleteItem={handleDeleteItem}
      />

      <div>
        <button className="add-button" onClick={addButtonHandler}>
          <IoAdd className="add-icon" />
        </button>
      </div>
      {showModal && (
        <AddTodo
          setShowModal={setShowModal}
          todos={todos}
          setTodos={setTodos}
          darkMode={darkMode}
        />
      )}
      {showEditModal && (
        <EditTodo
          setShowEditModal={setShowEditModal}
          todos={todos}
          index={selectedIndex}
          editButtonHandler={editButtonHandler}
          darkMode={darkMode}
        />
      )}
    </div>
  );
}
