export interface Todo {
  id: string;
  title: string;
  description: string;
}

export interface UserType {
  id: string;
  fullName: string;
  email: string;
  password: string;
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

export const createUser = (): UserType | undefined => {
  const user = localStorage.getItem("user");
  return user ? (JSON.parse(user) as UserType) : undefined;
};

export const getUser = (user: UserType) => {
  localStorage.setItem("user", JSON.stringify(user));
};
