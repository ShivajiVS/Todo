import { Todo } from "@/lib/localstorage";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { EllipsisVertical } from "lucide-react";
import { useState } from "react";

export const Todolist = ({
  todos,
  onDeleteTodo,
  isEditTodo,
}: {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
  isEditTodo: (todo: Todo, close?: boolean) => void;
}) => {
  const [visibleMenuId, setVisibleMenuId] = useState<string | null>(null);

  const toggleMenu = (id: string) => {
    setVisibleMenuId((prevId) => (prevId === id ? null : id));
  };

  if (todos.length === 0)
    return (
      <div className="flex items-center justify-center w-full h-[calc(100vh-250px)] mt-10">
        <h3 className="text-xl font-semibold tracking-tight capitalize">
          You have no todos, please add
        </h3>
      </div>
    );

  return (
    <section className="flex flex-col w-full max-w-4xl px-1 pb-20 mt-10 space-y-4 lg:mx-auto">
      {todos.map((item) => (
        <Card key={item.id} className="flex flex-col px-5 py-5 space-y-2">
          <div className="flex items-center justify-between space-x-2">
            <Link to={`/todo/${item.id}`}>
              <h2 className="text-xl font-bold tracking-tight ">
                {item.title}
              </h2>
            </Link>
            <div className="relative flex-shrink-0">
              <EllipsisVertical
                className="cursor-pointer"
                onClick={() => toggleMenu(item.id)}
              />
              {visibleMenuId === item.id && (
                <Card className="absolute right-0 z-10 flex flex-col w-40 h-auto p-2 space-y-2 rounded-none">
                  <Button variant="ghost" onClick={() => isEditTodo(item)}>
                    Edit
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      onDeleteTodo(item.id);
                      setVisibleMenuId(null);
                    }}
                  >
                    Delete
                  </Button>
                </Card>
              )}
            </div>
          </div>

          <p className="pr-4 text-base font-normal text-justify lg:pr-20">
            {item.description}
          </p>
        </Card>
      ))}
    </section>
  );
};
