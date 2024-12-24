import {
  JOB_CATEGORY,
  JOB_DESIGNATION,
  SKILLS,
} from "../../common/constant.js";
import { mailNow } from "../../common/utility.js";
import {
  getAllJobsModel,
  newApplicantToAJob,
  specificJobModel,
  postNewJobModel,
  updateJobModel,
  deleteJobModel,
  searchByLocationDesig,
} from "../models/job.model.js";

export const getAllJobs = (req, res) => {
  const jobs = getAllJobsModel();
  res.render("jobs/list", { jobs });
};

export const getUpdateJob = (req, res) => {
  const jobId = req.params.id;
  const jobs = specificJobModel(jobId);
  res.render("jobs/update", {
    job: jobs.length == 1 ? jobs[0] : [],
    skills: SKILLS,
    jobDesignation: JOB_DESIGNATION,
    jobCategory: JOB_CATEGORY,
    buttonName: "Update",
    errorMessage: "",
  });
};

export const postUpdateJob = (req, res) => {
  try {
    updateJobModel(req.body, req.params.id);
    return res.redirect("/jobs");
  } catch (error) {
    console.log("Have error while ading new job", error);
    return res.status(401).send("Have error while ading new job", error);
  }
};

export const getAddJob = (req, res) => {
  res.render("jobs/post", {
    job: [],
    skills: SKILLS,
    jobDesignation: JOB_DESIGNATION,
    jobCategory: JOB_CATEGORY,
    buttonName: "Submit",
    errorMessage: "",
  });
};

export const postNewJob = (req, res) => {
  try {
    postNewJobModel(req.body);
    return res.redirect("/jobs");
  } catch (error) {
    console.log("Have error while ading new job", error);
  }
};

export const getJobDetailById = (req, res) => {
  const jobId = req.params.id;
  const jobs = specificJobModel(jobId);
  res.render("jobs/detail", {
    job: jobs.length == 1 ? jobs[0] : [],
    applicantCount: jobs.length == 1 ? jobs[0]?.applicants.length : 0,
    errorMessage: "",
  });
};

export const deleteAJobById = (req, res) => {
  const jobId = req.params.id;
  try {
    deleteJobModel(jobId);
    return res
      .status(200)
      .send({ success: true, message: "Successfully deleted" });
  } catch (error) {
    return res
      .status(200)
      .send({ success: false, message: "Issue with deletion" });
  }
};

export const postApplyAJob = (req, res) => {
  try {
    const jobId = req.params.id;
    const resumePath = "resume/" + req.file.filename;
    newApplicantToAJob(req.body, jobId, resumePath);
    mailNow(
      req.body.email,
      "Easily | Job Applied",
      "Successfully Applied to a job"
    );

    return res.redirect("/jobs/" + jobId);
  } catch (error) {
    console.log("Have error while applying a job", error);
  }
};

export const getApplicantsByJobId = (req, res) => {
  const jobId = req.params.id;
  const jobs = specificJobModel(jobId);
  res.render("jobs/applicant-list", {
    jobs: jobs.length == 1 ? jobs[0] : [],
  });
};

export const getJobBySearchText = (req, res) => {
  console.log("raj works");
  const jobs = searchByLocationDesig(req.query.searchText);
  res.render("jobs/list", { jobs });
};
