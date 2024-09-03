import "./App.css";

function App() {
  const name = "라이켓!";
  const somestyle = { backgroundColor: "seagreen", color: "white" };

  function myFunc() {
    return "gooood";
  }

  return (
    <div>
      <h1 style={somestyle}>hello {name}!!</h1>
      <h2>hello licat!!</h2>
      <div className="newClass" />
      {100 + 1}
      {"hello" + "world"}
      {myFunc()}
      {name ? "one" : "two"}
    </div>
  );
}

export default App;
