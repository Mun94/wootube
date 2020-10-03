import passport from "passport";
import User from "./schemas/user.js";

passport.use(User.createStratrgy());
