import { Loader2 } from "lucide-react";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Loader2 className="w-10 h-10 animate-spin" />
    </div>
  );
};
