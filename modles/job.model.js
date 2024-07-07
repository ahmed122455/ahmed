
import { Schema, model, types } from "mongoose";

const jobSchema = new Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  jobLocation: {
    type: String,
    required: true,
    enum: {
      values: ["onsite", "remotely", "hybrid"],
      message: "location must be ( onsite, remotely, hybrid)",
    },
  },
  workingTime:{
    type :String,
    required: true,
    enum:{
        values:["part-time" , "full-time"],
        message: "success",
    },
    seniorityLevel:{
        type:String,
        erquired:true,
        enum:{
            values:[ "Junior", "Mid-Level", "Senior,Team-Lead", "CTO" ],
            message: " success ",
        },
        jobDescription :{
            typr:String,
            required : true,
        },
        technicalSkills :{
            type:  Array,
            required: true,
        },
        softSkills:{
            type: Array,
            required:true,
        },
        addedBy:{
            type:String,
            required:true,
        },

    }
  }
});


export const Job = model('job' , jobSchema )