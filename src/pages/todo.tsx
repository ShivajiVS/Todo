import { getTodoById } from "@/lib/localstorage";
import { useParams } from "react-router";

export default function Todo() {
  const { id } = useParams();
  const todo = getTodoById(id!);

  if (!todo) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <p className="text-2xl font-semibold tracking-tight capitalize">
          Todo not found!
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto mt-10">
      <h1 className="py-5 text-4xl font-bold tracking-tight text-center uppercase border-b">
        Todo Details
      </h1>
      <section className="flex flex-col px-5 py-8 mx-2 mt-5 space-y-4 text-lg border rounded-md lg:px-10 lg:py-16">
        <div>
          <span className="font-semibold">Title:</span>
          <p>{todo.title}</p>
        </div>
        <div>
          <span className="font-semibold">Description:</span>
          <p className="hyphens-auto ">{todo.description}</p>
        </div>
      </section>
    </div>
  );
}
