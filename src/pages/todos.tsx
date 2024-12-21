import { useState, useEffect } from "react";
import { TodoForm } from "@/components/todos/todo-form";
import TodoList from "@/components/todos/todo-list";
import { getTodos, saveTodos, Todo } from "@/lib/localstorage";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EditTodoForm } from "@/components/todos/edit-todo-form";

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editTodo, setEditTodo] = useState(false);

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  const addTodo = (newTodo: Todo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const isEditTodo = () => {
    setEditTodo((prev) => !prev);
  };

  if (editTodo) {
    return (
      <div className="absolute z-50 w-full max-w-lg transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2">
        <Card className="relative px-2 py-5 rounded-md lg:p-10">
          <div className="absolute top-4 right-6">
            <button className="text-lg" onClick={isEditTodo}>
              X
            </button>
          </div>
          <div className="mt-5">
            <EditTodoForm onAddTodo={addTodo} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen max-w-6xl mx-auto mt-10">
      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodo}
        isEditTodo={isEditTodo}
      />
    </div>
  );
}
