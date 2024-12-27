import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="flex flex-col space-y-8">
        <h1 className="text-6xl font-bold tracking-tight capitalize">
          welcome to{" "}
          <span className="text-orange-500 border-b-2">Todolist</span>
        </h1>
        <Link to="/sign-in" className="mt-4 text-lg text-center ">
          <Button size="lg">LogIn</Button>
        </Link>
      </div>
    </div>
  );
}
