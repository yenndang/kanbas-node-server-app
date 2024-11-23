import Database from "../Database/index.js";

// Retrieve all enrollments for a specific course
export function findEnrollmentsForCourse(courseId) {
  const { enrollments } = Database;
  return enrollments.filter((enrollment) => enrollment.course === courseId);
}

// Enroll a user in a course
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  const newEnrollment = {
    _id: Date.now().toString(),
    user: userId,
    course: courseId,
  };
  enrollments.push(newEnrollment);
  return newEnrollment;
}

// Unenroll a user from a course
export function unenrollUserFromCourse(userId, courseId) {
  const { enrollments } = Database;
  const index = enrollments.findIndex(
    (enrollment) => enrollment.user === userId && enrollment.course === courseId
  );
  if (index !== -1) {
    enrollments.splice(index, 1); // Remove the enrollment
    return true;
  }
  return false;
}
export function findEnrollmentsForUser(userId) {
  const { enrollments } = Database;
  return enrollments.filter((enrollment) => enrollment.user === userId);
}
