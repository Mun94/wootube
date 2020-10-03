import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import { localsMiddleware } from "./middlewares.js";
import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";
import routes from "./routes.js";

import "./passport.js";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(passport.initialize());
app.use(passport.session());
app.use(localsMiddleware);
app.use(logger("dev"));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
