import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Todo } from "@/lib/localstorage";
import { Input } from "../ui/input";

export const TodoForm = ({
  onAddTodo,
  isNewTodo,
}: {
  onAddTodo: (todo: Todo) => void;
  isNewTodo: () => void;
}) => {
  const [todo, setTodo] = useState<{ title: string; description: string }>({
    title: "",
    description: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newTodo = {
      ...todo,
      id: crypto.randomUUID(),
    };
    onAddTodo(newTodo);
    setTodo({ title: "", description: "" });
  };

  return (
    <div className="absolute z-50 w-full max-w-lg transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
      <Card className="relative flex items-center max-w-lg px-5 py-10 mx-2 rounded-md lg:mx-auto lg:p-16">
        {/* // flex items-center px-2 py-8 mx-2 rounded-md lg:p-16 */}
        <div className="absolute top-4 right-6">
          <button className="text-lg" onClick={isNewTodo}>
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
        <form className="w-full space-y-5" onSubmit={handleSubmit}>
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
            <Input
              placeholder="description"
              id="description"
              value={todo.description}
              onChange={(e) =>
                setTodo((prev) => ({ ...prev, description: e.target.value }))
              }
              required
            />
          </div>
          <div className="w-full">
            <Button className="w-full px-5 mt-5 uppercase" type="submit">
              Add
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
