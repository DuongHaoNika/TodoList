import mongoose from "mongoose";

async function connect(){
    try{
        await mongoose.connect("mongodb://localhost:27017/todolist")
        console.log("Connect database successfully!")
    }
    catch (err){
        console.log("Error!")
    }
}

export default {connect}