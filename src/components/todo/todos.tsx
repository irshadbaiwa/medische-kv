"use client";

import TodosTable from "../table/todo-table";
import { tasks } from "@/data/tasks";
import { ViewType } from "./@types";
import { useTodoContext } from "./todo-provider";

export const Todos = () => {
  const { viewType } = useTodoContext();

  return viewType === ViewType.TABLE ? <TodosTable tasks={tasks} /> : "Kanban";
};
