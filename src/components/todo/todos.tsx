"use client";

import TodosTable from "../table/todo-table";
import { ViewType } from "./@types";
import { useTodoContext } from "./todo-provider";

export const Todos = () => {
  const { viewType, todos } = useTodoContext();

  return viewType === ViewType.TABLE ? <TodosTable tasks={todos} /> : "Kanban";
};
