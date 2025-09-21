import { Task, TaskStatus, TaskPriority } from "@/components/todo/@types";

export const tasks: Task[] = [
  {
    name: "Design login page",
    status: TaskStatus.TODO,
    date: "2025-09-10",
    assignees: [
      { name: "Alice", avatar: "/team/maria-vetrovs.jpg" },
      { name: "Bob", avatar: "/team/maria-vetrovs.jpg" },
    ],
    priority: TaskPriority.IMPORTANT,
    description: "Create a responsive login page design with Chakra UI",
  },
  {
    name: "API Integration for Todos",
    status: TaskStatus.ONGOING,
    date: "2025-09-12",
    assignees: [{ name: "Charlie", avatar: "/team/maria-vetrovs.jpg" }],
    priority: TaskPriority.URGENT,
    description:
      "Integrate the frontend with backend APIs Integrate the frontend with backend APIs Integrate the frontend with backend APIs Integrate the frontend with backend APIs Integrate the frontend with backend APIs",
  },
  {
    name: "Write unit tests",
    status: TaskStatus.COMPLETED,
    date: "2025-09-15",
    assignees: [
      { name: "David", avatar: "/team/maria-vetrovs.jpg" },
      { name: "Eve", avatar: "/team/maria-vetrovs.jpg" },
      { name: "Maria", avatar: "/team/maria-vetrovs.jpg" },
    ],
    priority: TaskPriority.NORMAL,
    description: "Add unit tests for components and utils",
  },
  {
    name: "Prepare project docs",
    status: TaskStatus.TODO,
    date: "2025-09-20",
    assignees: [{ name: "Frank", avatar: "/team/maria-vetrovs.jpg" }],
    priority: TaskPriority.LOW,
    description: "Write documentation for the project setup",
  },
  {
    name: "Write unit tests",
    status: TaskStatus.COMPLETED,
    date: "2025-09-15",
    assignees: [
      { name: "David", avatar: "/team/maria-vetrovs.jpg" },
      { name: "Eve", avatar: "/team/maria-vetrovs.jpg" },
      { name: "Maria", avatar: "/team/maria-vetrovs.jpg" },
    ],
    priority: TaskPriority.NORMAL,
    description: "Add unit tests for components and utils",
  },
  {
    name: "Prepare project docs",
    status: TaskStatus.TODO,
    date: "2025-09-20",
    assignees: [{ name: "Frank", avatar: "/team/maria-vetrovs.jpg" }],
    priority: TaskPriority.LOW,
    description: "Write documentation for the project setup",
  },
];
