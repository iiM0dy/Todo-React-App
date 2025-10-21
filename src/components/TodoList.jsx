export function TodoList({filteredTodos,darkMode,handleItemDone,setSelectedIndex,setShowEditModal,handleDeleteItem}){
    return(
        <div className="todo-list">
        {filteredTodos.length === 0 ? (
          <EmptyTodo darkMode={darkMode} />
        ) : (
          filteredTodos.map((todo, index) => (
            <div key={index} className="todo-bigger-container">
              <label className="todo-container">
                <div className="todo-checkbox">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleItemDone(index)}
                  />
                  <span className="checkmark"></span>
                  <span
                    className={`todo-name-${todo.completed ? "true" : "false"}${
                      darkMode ? "-dark" : ""
                    }`}
                  >
                    {todo.text}
                  </span>
                </div>
              </label>
              <div className="todo-tools">
                <button
                  className="tools"
                  onClick={() => {
                    setSelectedIndex(index);
                    setShowEditModal(true);
                  }}
                >
                  <MdOutlineEdit className="edit-icon" />
                </button>

                <button
                  className="tools"
                  onClick={() => handleDeleteItem(index)}
                >
                  <RiDeleteBin6Line className="delete-icon" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    );
}