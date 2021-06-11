import React, { useState } from "react";
// import Calculator from "./Calculator";
import "./Main.css";
const Main = () => {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(0);
  return (
    <div className="boundary" id="boundary">
      <div>
        <button
          onClick={(event) => {
            var obj = { id: id, content: `I am ${id}` };
            setItems([...items, obj]);
            setId(id + 1);
          }}
        >
          {" "}
          Add
        </button>
        {items.map((ele, index) => {
          return <div key={index}>{ele.content}</div>;
        })}
      </div>
    </div>
  );
};

export default Main;
