import React, { useState } from "react";
// import Calculator from "./Calculator";
import "./Main.css";
const Main = () => {
  const [items, setItems] = useState([]);
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
  const deleteHandler = (event, index) => {
    const id = index;
    var i = 0;
    while (i < items.length) {
      if (items[i].id === id) items.splice(i, 1);
      else i++;
    }
    setId(id - 1);
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
          return (
            <div key={index}>
              {ele.content}
              <button onClick={(event) => deleteHandler(event, ele.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
