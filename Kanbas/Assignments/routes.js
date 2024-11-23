import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  // Get assignments for a course
  app.get("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    const courseAssignments = dao.findAssignmentsForCourse(courseId);
    res.json(courseAssignments);
  });

  // Create a new assignment
  app.post("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    const newAssignment = { ...req.body, course: courseId };
    const createdAssignment = dao.createAssignment(newAssignment);
    res.json(createdAssignment);
  });

  // Update an assignment
  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const updates = req.body;
    const updatedAssignment = dao.updateAssignment(assignmentId, updates);
    res.json(updatedAssignment);
  });

  // Delete an assignment
  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    dao.deleteAssignment(assignmentId);
    res.sendStatus(204);
  });
}
