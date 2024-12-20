import { getTodoById } from "@/lib/localstorage";
import { useParams } from "react-router";

export default function Todo() {
  const { id } = useParams();
  const todo = getTodoById(id!);

  if (!todo) {
    return <p>Todo not found!</p>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto mt-10">
      <h1>Todo Details</h1>
      <p>
        <strong>Title:</strong> {todo.title}
      </p>
      <p>
        <strong>Description:</strong> {todo.description}
      </p>
    </div>
  );
}
