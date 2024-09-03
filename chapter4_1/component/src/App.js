import Hello from "./components/Hello";
import { HelloProps } from "./components/HelloProps";
import { Time } from "./components/Time";

function App() {
  return (
    <div>
      <HelloProps
        name="jaehyun"
        age={30}
        someFunc={() => "hello!!"}
        someJSX={<img src="https://picsum.photos/id/237/200/300" />}
        someArr={[1, 2, 3]}
        someObj={{ one: 1 }}
      />
      <Hello name="gary" />
      <Time />
    </div>
  );
}

export default App;
