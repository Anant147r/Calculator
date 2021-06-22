import React, { useState } from "react";
// import fire from "../../fire";
const Calculator = () => {
  const [items, setItemList] = useState([]);
  const [item, setItem] = useState("");
  const changeItemHadler = (value) => {
    setItem(value);
  };
  const addItemHandler = () => {
    setItemList([...items, item]);
    setItem("");
  };
  const deleteItem = (value) => {
    var tempArr = items.filter((item) => {
      return item !== value;
    });
    setItemList(tempArr);
  };
  return (
    <>
      <input
        value={item}
        onChange={(event) => {
          changeItemHadler(event.target.value);
        }}
      />
      <button
        onClick={() => {
          addItemHandler();
        }}
      >
        Add
      </button>
      <div>
        {items.map((value, index) => {
          return (
            <div key={index}>
              <span>{value}</span>{" "}
              <span>
                <button
                  onClick={() => {
                    deleteItem(value);
                  }}
                >
                  Delete
                </button>
              </span>{" "}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Calculator;
