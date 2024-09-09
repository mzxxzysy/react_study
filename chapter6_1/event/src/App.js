import { useState } from "react";

function App() {
  // const [message, setMessage] = useState("여기에 주목해주세요!");

  // const handleOnMouseEnter = () => {
  //   setMessage("안녕하세요!");
  // };

  // const handleOnMouseLeave = () => {
  //   setMessage("안녕히가세요!");
  // };
  // return (
  //   <div>
  //     <p onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
  //       여기에 마우스를 올려보세요!
  //     </p>
  //     <strong>{message}</strong>
  //   </div>
  // );

  const handleLoginInput = (e) => {
    console.log("아이디 : ", e.target.value);
  };

  const handlePasswordInput = (e) => {
    console.log("패스워드 : ", e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
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
