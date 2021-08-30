import mongoose from "mongoose";
const cardSchema=mongoose.Schema(
    {   username:{type:String,required:true}, 
         email: {type:String,
         required: [true, "Email required"],
         unique: true
     },
         password:{type:String,required: [true, "Password required"]},
       })
        export default mongoose.model('User',cardSchema);