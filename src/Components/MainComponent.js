import React, { useState, useEffect } from "react";
import Login from "./Login/Login";
import Hero from "./Hero/Hero";
import fire from "../fire";
const MainComponent = ({ valid }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccout] = useState(true);
  const [items, setItems] = useState();
  const [activeUserEmail, setActiveUserEmail] = useState();
  const db = fire.firestore();

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };
  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((cred) => {
        // const db = fire.firestore();
        db.collection("users")
          .doc(email)
          .get()
          .then((doc) => {
            setItems(doc.data().items);
            setActiveUserEmail(email);
            // console.log(typeof email);
          });
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPassword(err.message);
            break;
          default:
            setEmailError(err.message);
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        // console.log(cred.user.uid);
        const db = fire.firestore();
        db.collection("users").doc(email).set({
          items: "",
        });
        setActiveUserEmail(email);
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPassword(err.message);
            break;
          default:
            setEmailError(err.message);
        }
      });
  };

  const handleLogout = (items) => {
    fire
      .auth()
      .signOut()
      .then(() => {
        // console.log(items);
        var str = "";
        items.forEach((item) => {
          str = str + item;
          str = str + ":";
        });
        db.collection("users").doc(activeUserEmail).set({ items: str });
        setActiveUserEmail();

        // console.log(str);
      });
  };
  useEffect(() => {
    const unsubscribe = fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
    return unsubscribe;
  }, []);
  // useEffect(() => {
  //   if (db) {
  //     const unsubscribe = db
  //       .collection("users")
  //       .doc("anant@anant.com")
  //       .onSnapshot((querySnapshot) => {
  //         // const data = querySnapshot.docs.map((doc) => ({
  //         //   ...doc.data(),
  //         // }));
  //         // console.log(data);
  //         console.log(querySnapshot.data());
  //       });
  //     return unsubscribe;
  //   }
  // }, [db]);

  return (
    <div className="mainComponent">
      {user ? (
        <Hero user={user} handleLogout={handleLogout} items={items} />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          hasAccount={hasAccount}
          setHasAccout={setHasAccout}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
};
export default MainComponent;
