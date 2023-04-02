type CreateToDoType = {
  todo: string;
  description: string;
  isCompleted: boolean;
};

type ToDoType = {
  todo: string;
  description: string;
  id: number;
  isCompleted: boolean;
};

export type { CreateToDoType, ToDoType };
