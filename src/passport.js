import passport from "passport";
import GitHubStrategy from "passport-github2";
import { githubLoginCallback } from "./controllers/userController.js";
import User from "./schemas/user.js";
import routes from "./routes.js";
import dotenv from "dotenv";
dotenv.config();

passport.use(User.createStrategy());
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `https://hidden-earth-27978.herokuapp.com${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
