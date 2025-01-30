import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path"
import { fileURLToPath } from "url";

import routes from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors("*"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api-v1", routes);

// app.use("*", (req, res) => {
//   res.status(404).json({
//     status: "404 Not Found",
//     message: "Route Not Found",
//   });
// });
app.use(express.static(path.join(__dirname, "../frontend/dist")))

app.get ("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/dist", "index.html"))
}
);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
