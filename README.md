# 📝 Modern Todo List App

A clean and simple task management application built with React, featuring a persistent dark/light mode, filtering, and live search functionality. This app helps you stay organized by managing your daily notes and tasks efficiently.

---

## ✨ Features

Based on the components and logic in your code:

* **CRUD Operations:** Easily **C**reate, **R**ead, **U**pdate, and **D**elete tasks.
* **Task Management:** Mark tasks as **Complete** or **Incomplete** using checkboxes.
* **Persistent Dark Mode:** A dedicated button allows the user to toggle between Light and Dark themes, with the mode persisting across the entire application.
* **Filtering:** Use a dropdown to filter tasks by:
    * **All**
    * **Complete**
    * **Incomplete**
* **Live Search:** An input field allows users to instantly search and filter the list of notes based on keywords.
* **Modal Interfaces:** Uses sleek modal windows for adding and editing notes for a focused user experience.
* **Empty State:** Displays a custom image/message (`EmptyTodo.jsx`) when no notes are present or match the current filter/search criteria.
* **Responsive Design:** Styled using standard CSS to ensure a good experience on different screen sizes.

---

## 🛠️ Technologies Used

* **React:** For building the dynamic user interface and managing state with `useState` and `useEffect`.
* **Vite:** The build tool used for fast development and bundling (inferred from `main.jsx` and project structure).
* **React Icons:** Used for icons like Add (`IoAdd`), Edit (`MdOutlineEdit`), and Delete (`RiDeleteBin6Line`).
* **Standard CSS:** Custom styling for a clean, focused design.

---

## 🚀 Getting Started

Follow these steps to get a copy of the project up and running on your local machine.

### Prerequisites

You must have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/iiM0dy/Todo-React-App/
    cd Todo-App
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the application:**
    Since this is a typical React/Vite setup:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The app should open in your browser, typically at `http://localhost:5173`.

---

## 🗺️ Project Structure

The key files and their responsibilities:

├── src/ │ ├── assets/ │ │ ├── Detective-check-footprint1.png <-- Used in EmptyTodo.jsx │ │ └── Night.svg <-- Used for Dark Mode toggle │ ├── components/ │ │ ├── AddTodo.jsx # Modal for adding new tasks. │ │ ├── EditTodo.jsx # Modal for editing existing tasks. │ │ ├── EmptyTodo.jsx # Component shown when task list is empty. │ │ ├── HeaderTools.jsx # Contains Search bar, Filter, and Dark Mode button. │ │ └── TodoList.jsx # Maps and renders the list of tasks. │ ├── css/ │ │ ├── AddTodo.css │ │ ├── EditTodo.css │ │ ├── EmptyTodo.css │ │ └── Home.css │ ├── pages/ │ │ └── Home.jsx # Main container, handles all state logic (CRUD, filter, search, dark mode). │ ├── App.jsx │ ├── index.css │ └── main.jsx ├── index.html ├── package.json └── vite.config.js

---

## 👤 Author

* **iiM0dy**
* [Portfolio](https://iim0dy.github.io/Portofolio-Project/)
