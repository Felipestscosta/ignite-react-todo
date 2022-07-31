import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { NewTodo } from "./components/NewTodo";

function App() {
  return (
    <>
      <Header />

      <div className={styles.container}>
        <NewTodo />
      </div>
    </>
  );
}

export default App;
