import React from "react";

import { useState } from "react";
import Axios from "axios";
import "./App.css"


export default function Cards({ name, age, city, country, id }) {
  const [name1, setName] = useState(name);
  const [age1, setAge] = useState(age);
  const [city1, setCity] = useState(city);
  const [country1, setCountry] = useState(country);
  const [update, setUpdate] = useState(false);

  const deleteData = () => {
    Axios.post("http://localhost:5000/delete", { _id: id }).then((res) =>
      window.location.reload()
    );
  };

  const updateData = () => {
    const data = {
      name: name1,
      age: age1,
      city: city1,
      country: country1,
      _id: id,
    };
    Axios.post("http://localhost:5000/update", data).then((res) => {
      window.location.reload();
    });
  };

  return (
    <div className="container">
    <div className="card" >
      <p>
        Name :
        {update ? (
          <input value={name1} onChange={(e) => setName(e.target.value)} />
        ) : (
          name1
        )}
      </p>
      <p>
        Age :
        {update ? (
          <input value={age1} onChange={(e) => setAge(e.target.value)} />
        ) : (
          age1
        )}
      </p>
      <p>
        City :
        {update ? (
          <input value={city1} onChange={(e) => setCity(e.target.value)} />
        ) : (
          city1
        )}
      </p>
      <p>
        Country :
        {update ? (
          <input
            value={country1}
            onChange={(e) => setCountry(e.target.value)}
          />
        ) : (
          country1
        )}
      </p>
      {update ? <button onClick={() => updateData()} className="green">Update</button> : null}
      <button onClick={() => setUpdate(true)} className="green">Edit</button>
      <button onClick={() => deleteData()} className="red">Delete</button>
    </div>
    </div>
  );
}