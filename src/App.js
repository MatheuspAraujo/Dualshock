import "./styles.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Background from "./components/Background";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Background />
    </div>
  );
}
