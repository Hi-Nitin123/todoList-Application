import React, { useState } from "react";
import "../css/todoList.css";
// import { v4 as uuid4 } from "uuid";

function TodoList() {
  const [myItem, setItem] = useState("");
  const [list, setList] = useState([]);

  // const deleteHandler = (id, e) => {
  //   console.log(id);
  //   const newList = list.filter((value) => {
  //     return id !== e.target.key;
  //   });
  //   setList(newList);
  // };

  return (
    <div>
      <div id="myItems">
        <input
          type="text"
          id="input"
          value={myItem.item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <button
          id="button"
          onClick={() => {
            setList([...list, myItem]);
            setItem("");
          }}
        >
          <b>Add item</b>
        </button>
      </div>

      <ol id="ol">
        {list.map((val) => {
          return (
            <li>
              {val}{" "}
              <span id="span">
                <button className="cross" onClick={() => {}}>
                  x
                </button>
              </span>
            </li>
          );
        })}
      </ol>
      {console.log(list)}
    </div>
  );
}

export default TodoList;
