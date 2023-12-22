import create from 'zustand';
import { persist } from 'zustand/middleware';

type Tasks = {
  taskId: string[];
  addTask: (newTask: string) => void;
  removeTask: (id: string) => void;
};

export const useTasks = create(
  persist<Tasks>(
    (set) => ({
      taskId: [],
      addTask: (newTask: string) =>
        set((state) => ({
          taskId: [...state.taskId, newTask],
        })),
      removeTask: (id: string) =>
        set((state) => ({
          taskId: state.taskId.filter((taskId) => taskId !== id),
        })),
    }),
    {
      name: 'Tasks',
    }
  )
);
