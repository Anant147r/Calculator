// import Calculator from "./Components/Calculator";
// import Main from "./Components/Main";
import MainComponent from "./Components/MainComponent";
// import Calculator from "./Components/Calculator/Calculator";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        // border: "1px solid black",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <MainComponent />
      {/* <Calculator /> */}
    </div>
  );
}

export default App;
