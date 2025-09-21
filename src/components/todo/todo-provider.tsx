"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Task, TaskStatus, ViewType } from "./@types";
import { tasks as seedTasks } from "@/data/tasks";

const TODOS_STORAGE_KEY = "mkv-todos";

interface TodoContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterOption: TaskStatus | "all";
  setFilterOption: (option: TaskStatus | "all") => void;
  viewType: ViewType;
  setViewType: (type: ViewType) => void;
  todos: Task[];
  addTodo: (todo: Task) => void;
  deleteTodo: (name: string) => void;
  updateTodoStatus: (name: string, status: TaskStatus) => void;
  isLoading: boolean;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterOption, setFilterOption] = useState<TaskStatus | "all">("all");
  const [viewType, setViewType] = useState<ViewType>(ViewType.TABLE);

  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState<Task[]>([]);

  useEffect(() => {
    setIsLoading(true);
    let tasks: Task[];

    const storedTasks = localStorage.getItem(TODOS_STORAGE_KEY);
    if (storedTasks) {
      try {
        tasks = JSON.parse(storedTasks) as Task[];
      } catch {
        tasks = seedTasks;
      }
    } else {
      localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(seedTasks));
      tasks = seedTasks;
    }

    setTodos(tasks);
    setIsLoading(false);
  }, []);

  // Persist to local storage whenever todos change
  useEffect(() => {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo: Task) => {
    setTodos((prev) => [...prev, todo]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const updateTodoStatus = (id: string, status: TaskStatus) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  return (
    <TodoContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        filterOption,
        setFilterOption,
        viewType,
        setViewType,
        todos,
        addTodo,
        deleteTodo,
        updateTodoStatus,
        isLoading,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
