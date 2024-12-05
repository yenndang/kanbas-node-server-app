import mongoose from "mongoose"; // load the mongoose library
const userSchema = new mongoose.Schema( // create a new schema
  {
    username: { type: String, required: true, unique: true }, // String field that is required and unique
    password: { type: String, required: true }, // String field that in required but not unique
    firstName: String, // String fields
    email: String, // with no additional
    lastName: String, // configurations
    dob: Date, // // Date field with no configurations
    role: {
      type: String,
      enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
      default: "USER",
    },
    loginId: String,
    section: String,
    lastActivity: Date,
    totalActivity: String,
  },
  { collection: "users" } // store data in "users" collection
);
export default userSchema;
