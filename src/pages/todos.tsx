import { useState, useEffect, useCallback } from "react";
import { TodoForm } from "@/components/todos/todo-form";
import TodoList from "@/components/todos/todo-list";
import { getTodos, saveTodos, Todo } from "@/lib/localstorage";
import { EditTodoForm } from "@/components/todos/edit-todo-form";

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editTodo, setEditTodo] = useState(false);
  const [currentTodo, setCurrentTodo] = useState<Todo>();

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  const addTodo = (newTodo: Todo) => {
    console.log("new todo is", newTodo);
    const updatedTodos = [...todos, newTodo];

    console.log("after update", updatedTodos);

    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const updateTodo = useCallback((updatedTodo: Todo) => {
    const updatedTodos = getTodos().map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
    setEditTodo(false);
  }, []);

  const deleteTodo = useCallback((id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  }, []);

  const isEditTodo = useCallback((currentTodo?: Todo, close?: boolean) => {
    console.log("current todo is", currentTodo);
    setEditTodo((prev) => !prev);
    if (!close) setCurrentTodo(currentTodo);
    console.log("state todo", currentTodo);
  }, []);

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
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodo}
        isEditTodo={isEditTodo}
      />
    </div>
  );
}
