import assignments from "../Database/assignments.js";

export function findAssignmentsForCourse(courseId) {
  return assignments.filter((assignment) => assignment.course === courseId);
}

export function createAssignment(assignment) {
  const newAssignment = {
    ...assignment,
    _id: Date.now().toString(),
  };
  assignments.push(newAssignment);
  return newAssignment;
}

export function updateAssignment(assignmentId, updates) {
  const assignment = assignments.find((a) => a._id === assignmentId);
  if (assignment) {
    Object.assign(assignment, updates);
  }
  return assignment;
}

export function deleteAssignment(assignmentId) {
  const index = assignments.findIndex((a) => a._id === assignmentId);
  if (index > -1) {
    assignments.splice(index, 1);
  }
}
