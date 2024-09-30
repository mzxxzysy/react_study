import styled from "styled-components";

const Button = styled.button`
  background-color: blue;
  color: white;
  border: 2px solid gray;
  padding: 20px;
`;

const ButtonStyle2 = styled(Button)`
  color: black;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.3);
`;

const ButtonStyle3 = styled(ButtonStyle2)`
  background-color: lightgreen;
  color: white;
  border-radius: 25px;
`;

export { Button, ButtonStyle2, ButtonStyle3 };
