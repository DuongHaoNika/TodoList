import homeRouter from "./HomeRouter.js"
 
function route(app){
    app.use("/", homeRouter)
}

export default route 