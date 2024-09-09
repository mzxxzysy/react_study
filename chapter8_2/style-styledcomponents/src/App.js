import { createGlobalStyle, styled, css } from "styled-components";
import { Example } from "./components/Example";
import { reset } from "styled-reset";

// const GlobalStyle = createGlobalStyle`
//   ${reset}
//   span{
//     color: red;
//     font-size : 12px;
//   }
// `;

const ContentDiv = styled.div`
  padding: 30px;
`;

const ContentH3 = styled.h3`
  color: ${(props) => (props.name === "hello" ? "hotpink" : "seagreen")};
  font-size: 20px;
  text-align: center;
`;

const ContentExtends = styled(ContentH3)`
  border: 3px solid black;
`;

const One = css`
  color: hotpink;
`;
const Two = css`
  border: 1px solid black;
`;
const Three = styled.strong`
  ${One}
  ${Two}
`;

function App() {
  return (
    <ContentDiv>
      <Three>또 다른 확장 스타일</Three>
      <ContentExtends>확장스타일입니다.</ContentExtends>
      {/* <GlobalStyle /> */}
      <h1>hello world</h1>
      <ContentH3 name="hello">hello world</ContentH3>
      <span>hello world with span</span>
      <Example />
    </ContentDiv>
  );
}
export default App;
