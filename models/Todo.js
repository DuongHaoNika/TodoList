import mongoose from "mongoose"

const TodoSchema = mongoose.Schema({
    name: {type: String, require: true}
})

export default mongoose.model("Todo", TodoSchema)