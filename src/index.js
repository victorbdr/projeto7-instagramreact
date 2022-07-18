import ReactDOM from "react-dom";
import Header from "./Header";
import Corpo from "./Stories";
function App() {
  return (
    <div>
      <Header />
      <Corpo />
    </div>
  );
}
ReactDOM.render(<App />, document.querySelector(".root"));
