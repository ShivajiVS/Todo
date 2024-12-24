import { useState, useEffect } from "react";
import { TodoForm } from "@/components/todos/todo-form";
import TodoList from "@/components/todos/todo-list";
import { getTodos, saveTodos, Todo } from "@/lib/localstorage";
import { EditTodoForm } from "@/components/todos/edit-todo-form";
import { Todolist } from "@/components/todos/todolist";

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editTodo, setEditTodo] = useState(false);
  const [currentTodo, setCurrentTodo] = useState<Todo>();

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  const addTodo = (newTodo: Todo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const updateTodo = (updatedTodo: Todo) => {
    const updatedTodos = getTodos().map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
    setEditTodo(false);
  };

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const isEditTodo = (currentTodo?: Todo, close?: boolean) => {
    setEditTodo((prev) => !prev);
    if (!close) setCurrentTodo(currentTodo);
  };

  if (editTodo) {
    return (
      <EditTodoForm
        currentTodo={currentTodo!}
        updateTodo={updateTodo}
        isEditTodo={isEditTodo}
      />
    );
  }

  return (
    <div className="relative w-full h-screen max-w-6xl mx-auto mt-10">
      <TodoForm onAddTodo={addTodo} />
      <Todolist
        todos={todos}
        onDeleteTodo={deleteTodo}
        isEditTodo={isEditTodo}
      />
    </div>
  );
}
