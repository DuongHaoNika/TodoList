import HomeController from "../controllers/HomeControllers.js"
import express from "express"
const router = express.Router()

router.get('/', HomeController.show)
router.post('/add', HomeController.addTodo )
router.get('/delete/:_id', HomeController.deleteTodo)

export default router