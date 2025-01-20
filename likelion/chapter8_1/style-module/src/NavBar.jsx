import { useState } from "react";
import { ContentsContainer } from "./ContentsContainer";

function NavBar() {
  const [listName, setListName] = useState("detail");

  function checkId(event) {
    setListName(event.target.id);
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <button id="detail" onClick={checkId} style={listName === "detail" ? { color: "red" } : { color: "black" }}>
              상세정보
            </button>
          </li>
          <li>
            <button id="qna" onClick={checkId} style={listName === "qna" ? { color: "red" } : { color: "black" }}>
              Q&A
            </button>
          </li>
          <li>
            <button id="review" onClick={checkId} style={listName === "review" ? { color: "red" } : { color: "black" }}>
              review
            </button>
          </li>
        </ul>
      </nav>

      <ContentsContainer listName={listName} />
    </>
  );
}

export default NavBar;
