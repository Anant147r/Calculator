import React, { useEffect, useState } from "react";
import fire from "../../fire";
import "./Calculator.css";
const Calculator = (props) => {
  // const [itemFromBackend, setItemFromBackend] = useState(props.items);
  const [items, setItemList] = useState([]);
  const [item, setItem] = useState("");
  const db = fire.firestore();

  useEffect(() => {
    if (db) {
      const unsubscribe = db
        .collection("users")
        .doc(props.user.email)
        .onSnapshot((querySanpshot) => {
          // console.log(querySanpshot.data());
          // setItemFromBackend(querySanpshot.data().items);
          const itemsFromStringToArray = Array.from(querySanpshot.data().items);
          // console.log(itemsFromStringToArray);
          var str1 = " ";
          const tempArr = [];
          itemsFromStringToArray.forEach((value) => {
            if (value !== ":") {
              str1 = str1 + value;
              // console.log("Hello");
            } else {
              // console.log("Not hello");
              tempArr.push(str1);
              // console.log(str1);
              str1 = "";
            }
            // console.log(value);
          });
          // console.log(tempArr);
          setItemList(tempArr);
        });
      return unsubscribe;
    }
  }, [db, props]);
  const changeItemHadler = (value) => {
    setItem(value);
  };
  const addItemHandler = () => {
    setItemList([item, ...items]);
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
      {/* <div>{itemFromBackend}</div> */}
      <div
        className="calculator"
        //  style={{ border: "1px solid grey" }}
      >
        <input
          className="inputTask"
          value={item}
          onChange={(event) => {
            changeItemHadler(event.target.value);
          }}
        />
        <button
          className="btn btn-success taskAddButton"
          onClick={() => {
            if (item) addItemHandler();
          }}
        >
          Add Task
        </button>
        <div className="tasks">
          {items.map((value, index) => {
            return (
              <div className="eachTask" key={index}>
                <div>{value}</div>{" "}
                <div
                  className="handleHover deleteTask"
                  onClick={() => {
                    deleteItem(value);
                  }}
                >
                  Delete
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="btn btn-success"
          onClick={() => {
            props.handleLogout(items);
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Calculator;
