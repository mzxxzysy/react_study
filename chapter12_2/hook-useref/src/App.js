// import React, { useState, useEffect, useRef } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);
//   let countRef = useRef(0);
//   let countConst = 0;

//   // 랜더링 됨
//   const handleCountUpState = (e) => {
//     setCount(count + 1);
//     console.log(count); // 비동기 -> useEffect로 추적하면 동기 가능
//   };

//   // 클릭하면 변수의 값은 증가하지만 랜더링은 되지 않음
//   const handleCountUpRef = (e) => {
//     countRef.current = countRef.current + 1;
//     console.log(countRef.current);
//   };
//   // 랜더링 안되고 다른 state가 변해서 재렌더링 되어도 0으로 초기화
//   const handleCountUpConst = (e) => {
//     countConst = countConst + 1;
//     console.log(countConst);
//   };

//   return (
//     <>
//       <div>{count}</div>
//       <button onClick={handleCountUpState}>up!</button>
//       <div>{countRef.current}</div>
//       <button onClick={handleCountUpRef}>up!</button>
//       <div>{countConst}</div>
//       <button onClick={handleCountUpConst}>up!</button>
//     </>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }

// export default App;

import React, { useState, useRef } from "react";

const App = () => {
  const [emailValue, setEmailValue] = useState(""); // email state 값
  const [pwValue, setPwValue] = useState(""); // pw state 값
  const emailInput = useRef(null); //{current: null}
  const pwInput = useRef(null); //{current: null}

  const inputCheck = (e) => {
    e.preventDefault();
    if (emailInput.current.value === "") {
      alert("이메일을 입력해주세요");
      emailInput.current.focus();
      return; // if, else 문에 들어오게 되면 setState 실행없이 바로 return
    } else if (pwInput.current.value === "") {
      alert("비밀번호를 입력해주세요");
      pwInput.current.focus();
      return;
    }
    setEmailValue(emailInput.current.value);
    setPwValue(pwInput.current.value);
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }} onSubmit={inputCheck}>
      <label>
        이메일 : <input type="email" ref={emailInput} />
      </label>
      <label>
        비밀번호 : <input type="password" ref={pwInput} />
      </label>

      <button type="submit" style={{ width: "100px" }}>
        로그인
      </button>
      <span>입력한 이메일 : {emailValue}</span>
      <span>입력한 비밀번호 : {pwValue}</span>
    </form>
  );
};

export default App;
