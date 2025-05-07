import { useState } from "react";

type Todo = {
  id: string;
  text: string;
};

export default function TodoList() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = () => {
    setTodos((prev) => [...prev, { id: Date.toString(), text: todoText }]);
    setTodoText("");
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoHeader />
      <TodoInput
        value={todoText}
        onChange={(val) => setTodoText(val)}
        handleSubmit={() => handleSubmit()}
      />
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </>
  );
}

function TodoHeader() {
  return <h1>Todo List</h1>;
}

type TodoInputProps = {
  value: string;
  onChange: (val: string) => void;
  handleSubmit: () => void;
};
function TodoInput({ value, onChange, handleSubmit }: TodoInputProps) {
  return (
    <div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter todo..."
      />
      <button onClick={handleSubmit} disabled={!value}>
        Submit
      </button>
    </div>
  );
}

type TodosProps = {
  todos: Todo[];
  deleteTodo: (id: string) => void;
};
function Todos({ todos, deleteTodo }: TodosProps) {
  return (
    <div style={{ marginTop: 10 }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

type TodoItemProps = Todo & {
  deleteTodo: (id: string) => void;
};
function TodoItem({ id, text, deleteTodo }: TodoItemProps) {
  return (
    <div data-testid="todo">
      <span>{text} </span>
      <button data-testid="delete-todo" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </div>
  );
}
