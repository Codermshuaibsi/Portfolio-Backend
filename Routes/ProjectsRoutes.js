import express from "express";
import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../Controllers/ProjectsController";

const router = express.Router();

router.post("/create", createProject);       // Create
router.get("/getall", getProjects);          // Read all
router.get("/get/:id", getProjectById);    // Read single
router.put("/get/:id", updateProject);     // Update
router.delete("/get/:id", deleteProject);  // Delete

export default router;
