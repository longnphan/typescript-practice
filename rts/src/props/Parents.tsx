import { Child } from "./Child";

function Parent() {
  return <Child color="red" onClick={() => console.log("Clicked")}>
    hello
  </Child>;
}

export default Parent;
