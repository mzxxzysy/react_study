import { useState } from "react";
import { HomePage } from "./components/Homepage";
import { Login } from "./components/Login";

function App() {
  const user = {
    idUser: "jaehyun@weniv.com",
    pwUser: "1234",
  };

  const [login, setLogin] = useState(false);

  return <>{login ? <HomePage /> : <Login infoUser={user} setLogin={setLogin} />}</>;
}

export default App;
