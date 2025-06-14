import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../Controllers/tasks.controller.js";
const tasksRoutes = Router();

tasksRoutes.get("/tasks", getTasks, (req, res) => {});
tasksRoutes.get("/tasks/:id", getTask, (req, res) => {});
tasksRoutes.post("/tasks", createTask, (req, res) => {});
tasksRoutes.put("/tasks/:id", updateTask, (req, res) => {});
tasksRoutes.delete("/tasks/:id", deleteTask, (req, res) => {});

export default tasksRoutes;
