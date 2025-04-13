import { useState, useEffect } from "react";
import { TodoForm } from "@/components/todos/todo-form";
import { getTodos, saveTodos, Todo } from "@/lib/localstorage";
import { EditTodoForm } from "@/components/todos/edit-todo-form";
import { Todolist } from "@/components/todos/todolist";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";



export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editTodo, setEditTodo] = useState(false);
  const [currentTodo, setCurrentTodo] = useState<Todo>();
  const [isNewTodo, setIsNewTodo] = useState(false);

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  const addTodo = (newTodo: Todo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
    setIsNewTodo(false);
    toast({
      title: "New Todo Successful..",
    });
  };

  const updateTodo = (updatedTodo: Todo) => {
    const updatedTodos = getTodos().map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
    setEditTodo(false);
    toast({
      title: "Todo successful Updated..",
    });
  };

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
    toast({
      title: "Todo deleted Successful..",
      variant: "destructive",
    });
  };

  const isEditTodo = (currentTodo?: Todo, close?: boolean) => {
    setEditTodo((prev) => !prev);
    if (!close) setCurrentTodo(currentTodo);
  };

  const isNewTodoToggler = () => {
    setIsNewTodo((prev) => !prev);
  };

  if (isNewTodo) {
    return <TodoForm onAddTodo={addTodo} isNewTodo={isNewTodoToggler} />;
  }

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
    <div className="relative w-full h-screen max-w-4xl mx-2 mt-10 lg:mx-auto">
      <Button onClick={() => setIsNewTodo((prev) => !prev)}>
        Add New Todo
      </Button>
      <Todolist
        todos={todos}
        onDeleteTodo={deleteTodo}
        isEditTodo={isEditTodo}
      />
    </div>
  );
}
