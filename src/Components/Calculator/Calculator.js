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
      //  style={{ border: "1px solid grey" }}
      >
        <input
          style={{ marginRight: "1rem" }}
          value={item}
          onChange={(event) => {
            changeItemHadler(event.target.value);
          }}
        />
        <button
          className="btn btn-success"
          style={{ marignLeft: "2rem" }}
          onClick={() => {
            if (item) addItemHandler();
          }}
        >
          Add Task
        </button>
        <div
          style={{
            border: "1px solid grey",
            marginTop: "2rem",
            borderRadius: "5px",
            marginBottom: "1rem",
            height: "22rem",
            overflow: "scroll",
          }}
        >
          {items.map((value, index) => {
            return (
              <div
                key={index}
                style={{ marginBottom: ".5rem", marginTop: ".5rem" }}
              >
                <div>{value}</div>{" "}
                <div
                  className="handleHover"
                  onClick={() => {
                    deleteItem(value);
                  }}
                  style={{
                    // border: "1px solid grey",
                    maxWidth: "5rem",
                    margin: "0 auto",
                    borderRadius: "3px",
                    backgroundColor: "#DC3545",
                    marginBottom: ".5rem",
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
