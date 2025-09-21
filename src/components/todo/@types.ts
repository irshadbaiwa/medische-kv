export enum TaskStatus {
  TODO = "todo",
  ONGOING = "ongoing",
  COMPLETED = "completed",
}

export enum TaskPriority {
  LOW = "low",
  NORMAL = "medium",
  IMPORTANT = "important",
  URGENT = "urgent",
}

export interface Assignee {
  name: string;
  avatar: string;
}

export interface Task {
  id: string;
  name: string;
  status: TaskStatus;
  date: string;
  assignees: Assignee[];
  priority: TaskPriority;
  description: string;
}

export enum ViewType {
  TABLE = "table",
  KANBAN = "kanban",
}
