import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/table.css";

function ListOfUsers() {
  const [list, setList] = useState([]);
  // const [isActive, setIsActive] = useState(false);

  const accessHandler = async (id, value) => {
    console.log(value);
    // setIsActive((pre) => !pre);
    let rights = value === "Block" ? "Unblock" : "Block";
    console.log("falana", rights);
    await axios
      .patch(
        `http://localhost:8000/admin/${id}`,
        { rights },
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
    axios
      .get("http://localhost:8000/admin", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setList(res.data.getUsers);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/admin", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setList(res.data.getUsers);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <table id="adminTable">
        <tbody>
          <tr>
            <th id="myId">Id</th>
            <th className="heading">firstName</th>
            <th className="heading">lastName</th>
            <th className="heading">email</th>
            <th id="status">Status</th>
          </tr>

          {list.map((val) => {
            return (
              <tr key={val.Id}>
                <td>{val.Id}</td>
                <td>{val.firstName}</td>
                <td>{val.lastName}</td>
                <td>{val.email}</td>
                <td>
                  <button
                    className={`${
                      val.rights === "Block" ? "blocked" : "Unblocked"
                    }`}
                    onClick={() => {
                      accessHandler(val.Id, val.rights);
                    }}
                  >
                    {val.rights}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListOfUsers;
