import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import "./App.css";
import Items from "./components/Items";

function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  return (
    <div className='App'>
      <Items />
      <button onClick={() => actions.addMoney(10)}>Add +</button>
      <p> add your Money </p>
      <button onClick={() => actions.subMoney(10)}>Sub -</button>
    </div>
  );
}

export default App;
