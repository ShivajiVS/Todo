import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Todo } from "@/lib/localstorage";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

export const EditTodoForm = ({
  currentTodo,
  updateTodo,
  isEditTodo,
}: {
  currentTodo: Todo;
  updateTodo: (todo: Todo) => void;
  isEditTodo: (todo?: Todo, close?: boolean) => void;
}) => {
  const [todo, setTodo] = useState<Todo>(currentTodo);

  console.log("EditTodoForm recived todo", currentTodo);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    updateTodo(todo);
    setTodo({ title: "", description: "", id: "" });
  };

  return (
    <div className="absolute z-50 w-full max-w-xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
      <Card className="relative flex items-center px-2 py-8 mx-2 rounded-md lg:p-16">
        <div className="absolute top-4 right-6">
          <button className="text-lg" onClick={() => isEditTodo()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form
          className="flex flex-col w-full mt-5 space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="title">Title</label>
            <Input
              placeholder="title"
              id="title"
              value={todo.title}
              onChange={(e) =>
                setTodo((prev) => ({ ...prev, title: e.target.value }))
              }
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="description">Description</label>
            <Textarea
              placeholder="Type your description here."
              id="description"
              value={todo.description}
              onChange={(e) =>
                setTodo((prev) => ({ ...prev, description: e.target.value }))
              }
              required
            />
          </div>
          <div className="w-full">
            <Button className="w-full px-5 uppercase" type="submit">
              Update
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
