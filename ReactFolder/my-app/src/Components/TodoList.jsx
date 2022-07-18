import React, { useState } from "react";
import "../css/todoList.css";
import { v4 as uuid4 } from "uuid";
import axios from "axios";
console.log("Your token", localStorage.getItem("token"));

function TodoList() {
  const [myItem, setItem] = useState("");
  const [list, setList] = useState([]);
  const [isActive, setActive] = useState({
    state: false,
    id: "",
  });

  const handleAddItem = () => {
    const item = { item: myItem, id: uuid4() };
    const todoListName = item.item;
    console.log(todoListName);
    let newList = list;
    newList = newList.concat(item);
    setList(newList);
    axios
      .post(
        "http://localhost:8000/todoList",
        { todoListName },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => console.log("response", res.data))
      .catch((err) => {
        console.log(err);
      });
    setItem("");
  };
  const deleteHandler = (key) => {
    const newList = list.filter((value) => {
      return key !== value.id;
    });

    setList(newList);
  };

  const handleColor = (key) => {
    const listColor = { state: !isActive.state, id: key };
    setActive(listColor);
  };

  return (
    <div>
      <div id="myItems">
        <input
          type="text"
          id="input"
          value={myItem}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <button id="button" onClick={handleAddItem}>
          <b>Add item</b>
        </button>
      </div>

      <ol id="ol">
        {list.map((val) => {
          return (
            <li
              key={val.id}
              onClick={() => handleColor(val.id)}
              style={{
                backgroundColor:
                  isActive.id === val.id && isActive.state
                    ? "green"
                    : "lightGrey",
              }}
            >
              {val.item}
              <span id="span">
                <button className="cross" onClick={() => deleteHandler(val.id)}>
                  x
                </button>
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default TodoList;
