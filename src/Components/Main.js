import React, { useState } from "react";
// import Calculator from "./Calculator";
import "./Main.css";
const Main = () => {
  const [items, setItems] = useState([{ id: "3", content: "sdfasdfsadasd" }]);
  const [id, setId] = useState(0);
  const [textContent, setTextContent] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    var obj = { id: id, content: textContent };
    setItems([...items, obj]);
    setId(id + 1);
    setTextContent("");
  };
  const changeHandler = (event) => {
    setTextContent(event.target.value);
  };
  return (
    <div className="boundary" id="boundary">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          onChange={(event) => changeHandler(event)}
          value={textContent}
        />
        <button type="submit">Add</button>
      </form>

      <div>
        {items.map((ele, index) => {
          return <div key={index}>{ele.content}</div>;
        })}
      </div>
    </div>
  );
};

export default Main;
