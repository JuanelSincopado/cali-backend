import express from "express";
import router from "./src/routes/tramite.route.js";
import connectDB from "./src/config/mongodb.js";
import cors from "cors"

const app = express();

connectDB();

app.use(express.json());
app.use(cors())

app.use("/", router)

app.listen(3000, () => {
  console.log("Server running on port 3000");
});