import express from "express";
import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../Controllers/ProjectsController.js";

const router = express.Router();

router.post("/", createProject);       // Create
router.get("/", getProjects);          // Read all
router.get("/:id", getProjectById);    // Read single
router.put("/:id", updateProject);     // Update
router.delete("/:id", deleteProject);  // Delete

export default router;
