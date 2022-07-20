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

  const handleColor = async (value, id) => {
    console.log(id);
    let status = value === "pending" ? "done" : "pending";
    await axios
      .patch(
        `http://localhost:8000/todoList/${id}`,
        { status },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    await getData();
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
        <button
          id="button"
          onClick={() => {
            handleAddItem();
          }}
        >
          <b>Add item</b>
        </button>
      </div>

      <ol id="ol">
        {list.map((value) => {
          return (
            <>
              <li
                className={`${value.status === "pending" ? "pending" : "done"}`}
                key={value.id}
                onClick={() => handleColor(value.status, value.id)}
              >
                {value.todoListName}
              </li>

              <button className="cross" onClick={() => deleteHandler(value.id)}>
                x
              </button>
            </>
          );
        })}
      </ol>
    </div>
  );
}

export default TodoList;
