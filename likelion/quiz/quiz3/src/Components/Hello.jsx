import React from "react";

function Hello(props) {
  const Somestyles = { background: "black", color: "white" };
  return (
    <React.Fragment>
      <h1 style={Somestyles}>안녕, {props.name} 1호</h1>
      <h1>안녕, {props.name} 2호!</h1>
      <div className="newClass"></div>
    </React.Fragment>
  );
}

export default Hello;
