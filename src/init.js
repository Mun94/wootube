import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`Listening on port:${PORT}`);

app.listen(PORT, handleListening);
