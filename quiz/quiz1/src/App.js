import React from "react";

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const time = today.getHours();
const min = today.getMinutes();
const sec = today.getSeconds();

function App() {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "black", color: "white" }}>안녕, 라이캣! 1호</div>
      <div>안녕, 라이캣 2호!</div>

      <div style={{ backgroundColor: "black", color: "white" }}>
        <div style={{ color: "red" }}>년 : {year}</div>
        <div>
          월/일 : {month}/{date}
        </div>
        <div>
          시간 : {time}시 {min}분 {sec}초
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;
