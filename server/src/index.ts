import express, {
	type Application,
	type Request,
	type Response
} from "express";
import "dotenv/config";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
	return res.send("It's working 🙌");
});

// * Routes
import authRoutes from "./routes/index.js";

app.use("/api/v1", authRoutes);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
