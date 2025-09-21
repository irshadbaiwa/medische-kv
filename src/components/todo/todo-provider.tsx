"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export enum ViewType {
  TABLE = "table",
  KANBAN = "kanban",
}
export enum FilterOption {
  ALL = "all",
  TODO = "todo",
  ONGOING = "ongoing",
  COMPLETED = "completed",
}

interface TodoContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterOption: FilterOption;
  setFilterOption: (option: FilterOption) => void;
  viewType: ViewType;
  setViewType: (type: ViewType) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterOption, setFilterOption] = useState<FilterOption>(
    FilterOption.ALL
  );
  const [viewType, setViewType] = useState<ViewType>(ViewType.TABLE);

  return (
    <TodoContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        filterOption,
        setFilterOption,
        viewType,
        setViewType,
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
