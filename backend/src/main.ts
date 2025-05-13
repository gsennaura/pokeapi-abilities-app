import express from "express";
import { registerRoutes } from "./interfaces/http/routes";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Register HTTP routes
registerRoutes(app);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});