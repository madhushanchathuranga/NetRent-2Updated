require("dotenv").config("./.env");

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./connectDB.js");
const userRoutes = require("./routes/userRoutes.js");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");
const agentRoutes = require("./routes/agentRoutes");

require("./config/passport"); // Load Passport config

const app = express();

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/api/agents", agentRoutes);

// ✅ Google OAuth routes
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  })
);

// ✅ Protected route example
app.get("/dashboard", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send("You are not logged in");
  }

  res.json({
    user: req.user,
    message: `Welcome ${req.user.displayName}`,
  });
});

// ✅ Logout
app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
