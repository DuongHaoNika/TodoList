import express from "express"
import path from "path"

const appConfig = (app, __dirname) => {
    app.use(express.urlencoded({extended: true}))
    app.use(express.static(path.join(__dirname, "public")));
    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "ejs");
    app.set("layout", "./layouts/layout");
}

export default appConfig