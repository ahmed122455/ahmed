
import{model , Schema , Types} from "mongoose"

const AppSchema = new Schema ({
    jobId:{
        type:String,
        required:true 
    },
    userId:{
        type: Types.ObjectId,
        required:true
    },
    userTechSkills :{
        type: Array,
        required:true
    },
    userSoftSkills :{
        type: Array,
        required:true
    },
    userResume :{
        type:String,
        required:true 
    }
})

export const app = model ('app' , AppSchema)