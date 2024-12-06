import Database from "../Database/index.js";
import model from "./model.js";
export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
}
export function enrollUserInCourse(user, course) {
  return model.create({ user, course });
}
export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
}

// Retrieve all enrollments for a specific course
export function findEnrollmentsForCourse(courseId) {
  const { enrollments } = Database;
  return enrollments.filter((enrollment) => enrollment.course === courseId);
}

// // Enroll a user in a course
// export function enrollUserInCourse(userId, courseId) {
//   const { enrollments } = Database;
//   const newEnrollment = {
//     _id: Date.now().toString(),
//     user: userId,
//     course: courseId,
//   };
//   enrollments.push(newEnrollment);
//   return newEnrollment;
// }

// // Unenroll a user from a course
// export function unenrollUserFromCourse(userId, courseId) {
//   const { enrollments } = Database;
//   const index = enrollments.findIndex(
//     (enrollment) => enrollment.user === userId && enrollment.course === courseId
//   );
//   if (index !== -1) {
//     enrollments.splice(index, 1); // Remove the enrollment
//     return true;
//   }
//   return false;
// }

export function findEnrollmentsForUser(userId) {
  const { enrollments } = Database;
  return enrollments.filter((enrollment) => enrollment.user === userId);
}
