import React, { useState } from "react";
import "./index.css";

function Todo() {
  let [task, setTask] = useState("");
  let [kategory, setKategory] = useState("");
  let [data, setData] = useState([]);

  let [filter, setFilter] = useState("");

  function save(e) {
    e.preventDefault();
    if (task.length < 1) {
      alert("Malumotni kiriting");
      return;
    }
    if (kategory.length < 2) {
      alert("kategoriyani tanlash shart");
      return;
    }
    let user = {
      task: task,
      kategory: kategory,
    };

    const copied = [...data];
    copied.push(user);
    setData(copied);
    setTask("");
    setKategory("");
  }

  function select(e) {
    setKategory(e.target.value);
  }
  function filterTasks(e) {
    setFilter(e.target.value);
  }

  const filteredData = filter
    ? data.filter((task) => task.kategory === filter)
    : data;

  return (
    <div>
      <form className="form1">
        <input
          type="text"
          placeholder="Enter to task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <select onChange={select} value={kategory}>
          <option value="">Kategoriyani tanlang</option>
          <option value="ish">Ish</option>
          <option value="o‘qish">O‘qish</option>
          <option value="shaxsiy">Shaxsiy</option>
        </select>
        <button onClick={save}>Save</button>
      </form>
      <div className="filter">
        <h2>tanlang: </h2>
        <select onChange={filterTasks} value={filter}>
          <option value="">Kategoriyani tanlang</option>
          <option value="ish">ish</option>
          <option value="o‘qish">O‘qish</option>
          <option value="shaxsiy">Shaxsiy</option>
        </select>
      </div>
      <div className="cards">
        {filteredData.length > 0 &&
          filteredData.map((value, index) => {
            return (
              <div key={index} className="card">
                <div className="card-flex">
                  <p>{value.task}</p>
                  <p>Kategoriya: {value.kategory}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Todo;
