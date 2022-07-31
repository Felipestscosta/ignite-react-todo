import { Trash } from "phosphor-react";
import styles from "./Todo.module.css";

interface Todo {
  id?: number;
  content: string;
  status: string;
  onDeleteTodo: (idTodo: string) => void;
  onDoneTodo: (idTodo: string) => void;
}

export function Todo({ content, status, onDeleteTodo, onDoneTodo }: Todo) {
  function handleDeleteTodo() {
    onDeleteTodo(content);
  }

  function handleDoneTodo() {
    onDoneTodo(content);
  }

  return (
    <div className={`${styles.todo} ${status === "done" ? styles.done : null}`}>
      <span onClick={handleDoneTodo}></span>
      <p>{content}</p>
      <button title="Deletar tarefa" onClick={handleDeleteTodo}>
        <Trash />
      </button>
    </div>
  );
}
