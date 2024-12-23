import express from "express";
import app from "./index.js";
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobsRoute.js";
import { handle404 } from "./src/controllers/user.controller.js";

app.use("/", authRoutes);
app.use("/jobs", jobRoutes);

// home route
app.get("/", (req, res) => {
  res.render("home");
});

/**Apply to a specific job listing by ID, uploading a resume */
app.post("/apply/:id", (req, res) => {
  res.send("have to call job controller function");
});

app.get("/404", handle404);

app.listen(3000, () => {
  console.log("Server is listoning  on 3000");
});
