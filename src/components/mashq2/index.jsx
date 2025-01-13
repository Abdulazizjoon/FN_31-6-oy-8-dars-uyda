import React, { useState } from "react";
import "./index.css";
function User() {
  let [name, setName] = useState("");
  let [firsName, setFirstName] = useState("");
  let [email, setEmail] = useState("");
  let [age, setAge] = useState("");
  let [img, setimg] = useState("");
  let [data, setData] = useState([]);

  function btn(e) {
    e.preventDefault();
    if (name.length < 1) {
      alert("ismingizni kiriting");
      return;
    }
    if (email.length < 1) {
      alert("emailingizni kiriting");
      return;
    }
    if (firsName.length < 1) {
      alert("familyangizni kiriting");
      return;
    }
    if (age.length < 1) {
      alert("yoshingizni kiriting");
      return;
      }
      if (img.length<5) {
        alert("url manzil notgri");
          return
      }
    let user = {
      name: name,
      email: email,
      firsName: firsName,
      age: age,
      img: img,
    };
    let copied = [...data];
    copied.push(user);
    setData(copied);
    setAge("");
    setEmail("");
    setFirstName("");
    setName("");
    setimg("");
  }

  return (
    <div>
      <form className="form1">
        <input
          type="text"
          placeholder="ismingizni kiriting"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="familyangizni kiriting"
          value={firsName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="emailingizni kiriting"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="yoshingizni kiriting"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="img urlni kiriting"
          value={img}
          onChange={(e) => {
            setimg(e.target.value);
          }}
        />
        <button onClick={btn}>save</button>
      </form>
      <div className="cards-flex">
        {data.length > 0 &&
          data.map((value, index) => {
            return (
              <div className="card" key={index}>
                <img src={value.img} alt="img topilmadi" />
                <h2>{value.name}</h2>
                <p>{value.firsName}</p>
                <p>{value.age}</p>
                <p>{value.email}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default User;
