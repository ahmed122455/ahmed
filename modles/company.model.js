
import { Schema, model, Types } from "mongoose";
const companySchema = new Schema({
  companyName: {
    type: String,
    required: true,
    unique: [true, "this name olready exist"],
  },
  description: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  numberOfEmployees: {
    type: Number,
    min: 11,
    max: 20,
    required: true,
  },
  companyEmail: {
    type: String,
    required: true,
    unique: [true, "this name already exist"],
  },
  companyHR: {
    type: Types.ObjectId,
    ref: "User",
  },
});




export const Company = model('cmpany', companySchema)