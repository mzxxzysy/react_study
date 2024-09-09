import { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLoginInput = (e) => {
    setId(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPw(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (id === "") {
      alert("아이디를 입력하지 않았습니다.");
    }
    if (pw === "") {
      alert("패스워드를 입력하지 않았습니다.");
    }
    alert(`id : ${id}, pw : ${pw}`);
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        아이디 :
        <input type="text" onChange={handleLoginInput} />
      </label>
      <br />
      <label>
        비밀번호 :
        <input type="password" onChange={handlePasswordInput} />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}
export default App;
