import { ChangeEvent, FormEvent, useState } from "react";
import { ClipboardText, PlusCircle } from "phosphor-react";
import styles from "./NewTodo.module.css";
import { Todo } from "./Todo";

interface TodoProps {
  id: number;
  content: string;
  status: string;
}

export function NewTodo() {
  const [contentTodo, setContentTodo] = useState("");
  const [todos, setTodos] = useState<TodoProps[]>([]);

  function handleNewTodo(event: FormEvent) {
    event.preventDefault();

    const newTodo = {
      id: Math.random(),
      content: contentTodo,
      status: "open",
    };
    setTodos([...todos, newTodo]);
  }

  function newContentTodo(event: ChangeEvent<HTMLInputElement>) {
    setContentTodo(event.target.value);
  }

  function deleteTodo(content: string) {
    const newTodos = todos.filter(todoItem => {
      return todoItem.content !== content;
    });

    setTodos(newTodos);
  }

  function doneTodo(content: string) {
    const newTodos = todos.map(itemTodo => {
      if (itemTodo.content === content) {
        return {
          id: itemTodo.id,
          content,
          status: itemTodo.status === "done" ? "open" : "done",
        };
      } else {
        return itemTodo;
      }
    });

    setTodos(newTodos);
  }

  const listTodos = todos;
  const totalTodos = listTodos.length;
  const totalFinishTodos = todos.filter(todo => {
    return todo.status === "done";
  }).length;

  return (
    <>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          name="content"
          onChange={newContentTodo}
        />
        <button onClick={handleNewTodo}>
          Criar <PlusCircle />
        </button>
      </form>

      <div className={styles.list}>
        <header className={styles.header}>
          <strong>
            Tarefas criadas <span>{totalTodos}</span>
          </strong>
          <strong>
            Concluídas{" "}
            <span>
              {totalFinishTodos} de {totalTodos}
            </span>
          </strong>
        </header>

        {totalTodos === 0 ? (
          <div className={styles.emptyTodos}>
            <ClipboardText size={56} />
            <p>
              <strong>Você ainda não tem tarefas cadastradas{"\n"}</strong>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        ) : (
          todos.map(todo => {
            return (
              <Todo
                key={todo.id}
                content={todo.content}
                status={todo.status}
                onDeleteTodo={deleteTodo}
                onDoneTodo={doneTodo}
              />
            );
          })
        )}
      </div>
    </>
  );
}
