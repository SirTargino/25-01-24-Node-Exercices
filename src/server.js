import express from "express";
import { userClientRouter } from "./routes/UserClientRoute.js";
const app = express();
const port = 4000;

app.use(express.json());
app.use(userClientRouter);

app.listen(port, ()=> {
    console.log("Server run🚀")
})

