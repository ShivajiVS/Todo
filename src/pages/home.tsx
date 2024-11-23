import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="flex flex-col space-y-8">
        <h1 className="text-6xl font-bold text-orange-500 tracking-tight">
          welcome to Social
        </h1>
        <Link to="/sign-in" className=" mt-4 text-center text-lg">
          <Button size="lg">LogIn</Button>
        </Link>
      </div>
    </div>
  );
}
