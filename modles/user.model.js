
import { Schema, model } from "mongoose";
const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "this emaile alrady exist"],
    validate: [(email) => emailRegEx.test(email)],
  },
  password: {
    type: String,
    required: true,
  },
  recoveryEmail: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    unique: [true, "this emaile alrady exist"],
    required: true,
  },
  role: {
    type: String,
    enum: {
      values: ["user", "hr"],
      message: "role not valid",
    },
  },
  status: {
    type: String,
    enum: {
      values: ["online", "offline"],
      message: "status not valid",
    },
  },
});


userSchema.pre('save',function(){
    console.log(this)
})

export const User = model('user',userSchema)