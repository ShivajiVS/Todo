import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export const EditTodoForm = ({
  onAddTodo,
}: {
  onAddTodo: (todo: any) => void;
}) => {
  const [todo, setTodo] = useState<{ title: string; description: string }>({
    title: "",
    description: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newTodo = {
      ...todo,
      id: Date.now().toString(),
    };
    onAddTodo(newTodo);
    setTodo({ title: "", description: "" });
  };

  return (
    <div className="absolute z-50 w-full max-w-lg transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2">
      <Card className="relative flex items-center px-2 py-5 rounded-md lg:p-10">
        <form
          className="flex flex-col w-full space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="title"
              id="title"
              required
              className="h-10 px-2 border rounded-md outline-none"
              value={todo.title}
              onChange={(e) =>
                setTodo((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              placeholder="description"
              id="description"
              required
              className="h-10 px-2 border rounded-md outline-none"
              value={todo.description}
              onChange={(e) =>
                setTodo((prev) => ({ ...prev, description: e.target.value }))
              }
            />
          </div>
          <div className="w-full">
            <Button className="w-full px-5 uppercase" type="submit">
              Add
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
