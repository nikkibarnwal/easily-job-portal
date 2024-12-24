import express from "express";
import { authRecruiter } from "../src/middlewares/auth.middleware.js";
import {
  deleteAJobById,
  getAddJob,
  getAllJobs,
  getApplicantsByJobId,
  getJobDetailById,
  getUpdateJob,
  postApplyAJob,
  postNewJob,
  getJobBySearchText,
  postUpdateJob,
} from "../src/controllers/job.controller.js";
import uploadFile from "../src/middlewares/fileUpload.middleware.js";
import setLastVisit from "../src/middlewares/lastVisit.middleware.js";
import validateJobSeekerRequest from "../src/middlewares/validateJobSeeker.middleware.js";
import validateJobPost from "../src/middlewares/validateJobPost.middleware.js";

const router = express.Router();

/**Retrieve all jobs */
router.get("/", setLastVisit, getAllJobs);

/**Create new job listing */
router.post("/", authRecruiter, validateJobPost, postNewJob);

/**get new job create page */
router.get("/post", authRecruiter, getAddJob);

router.get("/search", getJobBySearchText);

/**Retrieve a specific job listing by ID */
router.get("/:id", getJobDetailById);

/**Update a specific job listing by ID */
router.put("/:id", authRecruiter, (req, res) => {
  res.render("jobs/update");
});

/** Delete a specific job listing by ID */
router.delete("/:id", authRecruiter, (req, res) => {
  res.render("jobs/update");
});

/**Retrieve all applicants for a specific job listing */
router.get("/:id/applicants", authRecruiter, getApplicantsByJobId);

/**Add a new applicant to a specific job listing */
router.post(
  "/:id/applicants",
  uploadFile.single("resume"),
  validateJobSeekerRequest,
  postApplyAJob
);

/**Retrieve a specific applicant by ID for a job listing */
router.get("/:id/applicants/:applicantId", (req, res) => {
  res.send("have to call job controller function");
});

/**Update a specific applicant by ID for a job listing */
router.put("/:id/applicants/:applicantId", (req, res) => {
  res.send("have to call job controller function");
});

/**Delete a specific applicant by ID for a job listing */
router.delete("/:id/applicants/:applicantId", (req, res) => {
  res.send("have to call job controller function");
});

/**Render the update form for a specific job listing */
router.get("/:id/update", authRecruiter, getUpdateJob);

/**Update a specific job listing by ID */
router.post("/:id/update", authRecruiter, validateJobPost, postUpdateJob);
/**Delete a specific job listing by ID */
router.post("/:id/delete", authRecruiter, deleteAJobById);

export default router;
