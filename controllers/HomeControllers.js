import Todo from "../models/Todo.js"

const show = async (req, res) => {
    try{
        const allTodo = await Todo.find({})
        res.render("home", {todo : allTodo})
    }
    catch (err){
        console.log(err)
    }
}

const setting = async (req, res) => {
    try{
        const allTodo = await Todo.find({})
        res.render("setting", {todo : allTodo})
    }
    catch (err){
        console.log(err)
    }
}

const update = async (req, res) => {
    try{
        const {_id} = req.params
        const todo = await Todo.findOne({_id})
        res.render('update', {todo: todo})
    }
    catch (err) {

    }
}

const updateFinal = async (req, res) => {
    try{
        const obj = req.body
        console.log(obj)
        const result = await Todo.updateOne({_id: req.params._id}, obj)
        res.redirect('/')
    }
    catch (err){
        console.log(err)
    }
}

const addTodo = (req, res) => {
    const obj = req.body
    console.log(obj)
    const NewTodo = new Todo(obj)
    NewTodo.save()
        .then(() => res.redirect('/setting'))
        .catch((err) => console.log(err))
}

const deleteTodo = (req, res) => {
    const {_id} = req.params
    Todo.deleteOne({_id})
        .then(() => {
            console.log("Deleted successfully!")
            res.redirect('/setting')
        })
        .catch(err => console.log("Error!")) 
}

export default { show, addTodo, deleteTodo, setting, update, updateFinal} 