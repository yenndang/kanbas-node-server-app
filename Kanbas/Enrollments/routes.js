import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  // Get all enrollments for a course
  app.get("/api/courses/:courseId/enrollments", (req, res) => {
    const { courseId } = req.params;
    const courseEnrollments = dao.findEnrollmentsForCourse(courseId);
    res.json(courseEnrollments);
  });

  // Enroll a user in a course
  app.post("/api/courses/:courseId/enroll", (req, res) => {
    const { courseId } = req.params;
    const { userId } = req.body;
    const newEnrollment = dao.enrollUserInCourse(userId, courseId);
    res.json(newEnrollment);
  });

  // Unenroll a user from a course
  app.delete("/api/courses/:courseId/unenroll", (req, res) => {
    const { courseId } = req.params;
    const { userId } = req.body;
    const success = dao.unenrollUserFromCourse(userId, courseId);
    if (success) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  });
  app.get("/api/users/:userId/enrollments", (req, res) => {
    const { userId } = req.params;
    const enrollments = dao.findEnrollmentsForUser(userId);
    res.json(enrollments);
  });
}
