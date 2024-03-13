import HomeController from "../controllers/HomeControllers.js"
import express from "express"
const router = express.Router()

router.get('/', HomeController.show)
router.post('/add', HomeController.addTodo )
router.get('/delete/:_id', HomeController.deleteTodo)
router.get('/setting', HomeController.setting)
router.get('/update/:_id', HomeController.update)
router.put('/update/:_id', HomeController.updateFinal)

export default router