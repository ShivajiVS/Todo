export interface Todo {
  id: string;
  title: string;
  description: string;
}

export const getTodos = (): Todo[] => {
  const todos = localStorage.getItem("todos");
  return todos ? (JSON.parse(todos) as Todo[]) : [];
};

export const saveTodos = (todos: Todo[]): void => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const getTodoById = (id: string): Todo | undefined => {
  const todos = getTodos();
  return todos.find((todo) => todo.id === id);
};
