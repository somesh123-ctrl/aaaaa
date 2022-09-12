import Create from "./Create";
import Axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./Cards";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/get").then((res) => setData(res.data));
  }, []);

  return (
    <div className="main">
    <div className="App">
      <Create />
      <br></br>
      {data.map((value) => (
        <Cards
          name={value.name}
          age={value.age}
          city={value.city}
          country={value.country}
          id={value._id}
        />
      ))}
    </div>
    </div>
  );
}

export default App;