import routes from "./routes.js";
import multer from "multer";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => (
  (res.locals.siteName = "WooTube"),
  (res.locals.routes = routes),
  (res.locals.user = {
    isAuthenticated: true,
    id: 1,
  }),
  next()
);

export const uploadVideo = multerVideo.single("videoFile");
