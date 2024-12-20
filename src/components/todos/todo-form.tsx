import { Button } from "../ui/button";
import { Card } from "../ui/card";

export const TodoForm = () => {
  return (
    <Card className="flex items-center max-w-lg py-10 mx-auto rounded-lg px-14">
      <form className="w-full space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="title"
            id="title"
            required
            className="h-10 px-2 border rounded-md outline-none "
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
          />
        </div>

        <div className="w-full">
          <Button className="w-full px-5 uppercase"> Add</Button>
        </div>
      </form>
    </Card>
  );
};
