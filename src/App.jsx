import { nanoid } from "nanoid";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import List from "./components/List";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [allTodos, setAllTodos] = useState([]);

  const handleChange = (event) => setInputValue(event.target.value);

  const todoCheck = (index) => {
    setAllTodos((prevtodos) => {
      return prevtodos.map((item, id) => {
        return id === index ? { ...item, checked: !item.checked } : item;
      });
    });
  };

  const handleAdd = () => {
    if (inputValue.trim() == "") {
      alert("Add a todo");
    } else {
      setAllTodos((prevtodo) => [
        { text: inputValue, checked: false },
        ...prevtodo,
      ]);
      setInputValue("");
    }
  };

  const handleDelete = (index) =>
    setAllTodos((prevtodo) => prevtodo.filter((item, id) => id !== index));

  return (
    <div className="p-12 space-y-12">
      <h3 className="text-7xl text-gray-300">todos</h3>
      <div className="flex items-center  px-5 p-2 rounded-xl shadow-lg justify-between">
        <input
          type="text"
          className="outline-none w-full"
          placeholder="Add todo..."
          value={inputValue}
          onChange={handleChange}
          name="todo"
        />
        <GoPlus
          onClick={handleAdd}
          className="bg-green-700 text-white rounded-full px-1 w-5 h-5"
        />
      </div>
      {allTodos.map((todo, index) => (
        <List
          key={index}
          handle={() => handleDelete(index)}
          item={todo}
          handleChecked={() => todoCheck(index)}
        />
      ))}
    </div>
  );
};

export default App;
