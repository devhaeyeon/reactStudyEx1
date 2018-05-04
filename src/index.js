import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const value = 1;

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    삼항 연산자 사용 코드
    {1 + 1 === 2 ? <div>맞아요!</div> : <div>틀려요!</div>}
    {1 + 1 === 2 && <div>맞아요!!!</div>}
    복잡한 조건을 작성해야하는 경우에는 JSX 밖에서 로직 작성하는 것이 좋음. JSX
    내부에서 작성해야 한다면, IIFE를 사용함.
    {(function() {
      if (value === 1) return <div>하나</div>;
      if (value === 2) return <div>둘</div>;
      if (value === 3) return <div>셋</div>;
    })()}
    arrow function 함수 사용
    {(() => {
      if (value === 1) return <div>하나</div>;
      if (value === 2) return <div>둘</div>;
      if (value === 3) return <div>셋</div>;
    })()}
    switch 문을 사용한 구문
    {(() => {
      switch (value) {
        case 1:
          return <div>하나</div>;
        case 2:
          return <div>둘</div>;
        default:
          return <div>셋</div>;
      }
    })()}
  </div>
);

render(<App />, document.getElementById("root"));
