import { body, validationResult, check } from "express-validator";
import {
  JOB_CATEGORY,
  JOB_DESIGNATION,
  SKILLS,
} from "../../common/constant.js";
import { specificJobModel } from "../models/job.model.js";

const validateJobPost = async (req, res, next) => {
  const rules = [
    body("jobcategory").notEmpty().withMessage("Select Job Category"),
    body("jobdesignation").notEmpty().withMessage("Select Job Designation"),
    body("joblocation")
      .trim()
      .notEmpty()
      .withMessage("Job location is required"),
    body("companyname")
      .trim()
      .notEmpty()
      .withMessage("Company name is required"),
    body("salary").trim().notEmpty().withMessage("Company name is required"),
    body("numberofopenings")
      .trim()
      .notEmpty()
      .withMessage("Positions is required"),
    body("skillsrequired").notEmpty().withMessage("Select atleast one skill"),
    check("applyBy").trim().isDate().withMessage("Enter valid date"),
  ];

  await Promise.all(rules.map((rule) => rule.run(req)));

  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const jobId = req?.params?.id;
    let jobs = [];
    let applicantCount = 0;
    let views = "jobs/post";
    let buttonName = "Submit";
    if (jobId) {
      jobs = specificJobModel(jobId);
      jobs = jobs.length == 1 ? jobs[0] : [];
      applicantCount = jobs.length == 1 ? jobs[0]?.applicants.length : 0;
      views = "jobs/update";
      buttonName = "Update";
    }
    return res.render(views, {
      job: jobs,
      applicantCount: applicantCount,
      errorMessage: validationErrors.errors[0].msg,
      skills: SKILLS,
      jobDesignation: JOB_DESIGNATION,
      jobCategory: JOB_CATEGORY,
      buttonName: buttonName,
    });
  } else next();
};

export default validateJobPost;
