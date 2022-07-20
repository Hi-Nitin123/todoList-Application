import React, { useEffect, useState } from "react";
import "../css/todoList.css";
import axios from "axios";


function TodoList() {
  const [myItem, setItem] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8000/mytodoList",

        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        let newList = res.data.data;

    setList(newList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getData = async () => {
    await axios
      .get(
        "http://localhost:8000/mytodoList",

        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        setList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddItem = async () => {


    let todoListName = myItem;

    axios
      .post(
        "http://localhost:8000/todoList",
        { todoListName },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    await getData();
    setItem("");

    
  };
  const deleteHandler = async (id) => {
   
    await axios
      .delete(`http://localhost:8000/todoList/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log("falana res", res);
      })
      .catch((err) => {
        console.log(err);
    });
    await getData();
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
