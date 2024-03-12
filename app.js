import express from "express"
import expressEjsLayouts from "express-ejs-layouts";
import db from "./config/db.js"
import appConfig from "./config/appConfig.js"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import route from "./routes/index.js"
import path from "path"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const port = 3000

app.use(expressEjsLayouts);

db.connect()
appConfig(app, __dirname)

route(app)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})