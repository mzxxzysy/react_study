import { useState } from "react";

export function Resume(props) {
  const [like, setLike] = useState("");

  function clickLike() {
    if (like === "") {
      setLike("like");
    } else {
      setLike("");
    }
  }
  const mycolor = props.color;

  return (
    <div style={{ border: "solid 1px black", width: "500px" }}>
      <h1>{props.name}의 자기소개서</h1>
      <h2>{props.hello}</h2>
      <h3>취미 : {props.hobby}</h3>
      <h3>좋아하는 음식 : {props.food}</h3>
      <h3>
        좋아하는 색 : <span style={{ color: mycolor }}>{props.color}</span>
      </h3>

      <button onClick={clickLike}>like</button>
      {like}
    </div>
  );
}
