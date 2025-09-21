import { Task, TaskStatus, TaskPriority } from "@/components/todo/@types";
import { team } from "./team";

export const tasks: Task[] = [
  {
    name: "Design login page",
    status: TaskStatus.TODO,
    date: "2025-09-10",
    assignees: [team[0], team[1]],
    priority: TaskPriority.IMPORTANT,
    description: "Create a responsive login page design with Chakra UI",
  },
  {
    name: "API Integration for Todos",
    status: TaskStatus.ONGOING,
    date: "2025-09-12",
    assignees: [team[2]],
    priority: TaskPriority.URGENT,
    description:
      "Integrate the frontend with backend APIs Integrate the frontend with backend APIs Integrate the frontend with backend APIs Integrate the frontend with backend APIs Integrate the frontend with backend APIs",
  },
  {
    name: "Write unit tests",
    status: TaskStatus.COMPLETED,
    date: "2025-09-15",
    assignees: [team[3], team[4], team[1], team[2]],
    priority: TaskPriority.NORMAL,
    description: "Add unit tests for components and utils",
  },
  {
    name: "Prepare project docs",
    status: TaskStatus.TODO,
    date: "2025-09-20",
    assignees: [team[1]],
    priority: TaskPriority.LOW,
    description: "Write documentation for the project setup",
  },
  {
    name: "Design login page",
    status: TaskStatus.TODO,
    date: "2025-09-10",
    assignees: [team[0], team[1]],
    priority: TaskPriority.IMPORTANT,
    description: "Create a responsive login page design with Chakra UI",
  },
  {
    name: "API Integration for Todos",
    status: TaskStatus.ONGOING,
    date: "2025-09-12",
    assignees: [team[2]],
    priority: TaskPriority.URGENT,
    description:
      "Integrate the frontend with backend APIs Integrate the frontend with backend APIs Integrate the frontend with backend APIs Integrate the frontend with backend APIs Integrate the frontend with backend APIs",
  },
  {
    name: "Write unit tests",
    status: TaskStatus.COMPLETED,
    date: "2025-09-15",
    assignees: [team[3], team[4], team[1], team[2]],
    priority: TaskPriority.NORMAL,
    description: "Add unit tests for components and utils",
  },
  {
    name: "Prepare project docs",
    status: TaskStatus.TODO,
    date: "2025-09-20",
    assignees: [team[1]],
    priority: TaskPriority.LOW,
    description: "Write documentation for the project setup",
  },
];
