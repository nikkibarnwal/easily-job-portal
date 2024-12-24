import { body, validationResult } from "express-validator";
import { specificJobModel } from "../models/job.model.js";

const validateJobSeekerRequest = async (req, res, next) => {
  // console.log("applicant details", req.body);
  //   1 Create validation rules
  const rules = [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required")
      .isLength({ min: 3, max: 30 })
      .withMessage("Name must be between 3 and 30 characters long.")
      .isAlpha("en-US", { ignore: " " })
      .withMessage("Name must contain only alphabets."),

    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Enter valid email"),

    body("contact")
      .trim()
      .isLength({ min: 10, max: 10 })
      .withMessage("Contact number must be exactly 10 digits long.")
      .isNumeric()
      .withMessage("Contact number must contain only numeric digits."),

    body("resume").custom((value, { req, res }) => {
      if (!req.file) {
        throw new Error("Resume is required");
      }
      return true;
    }),
  ];
  //   2 Run all rules

  await Promise.all(rules.map((rule) => rule.run(req)));

  //3. check if any error returned
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const jobId = req.params.id;
    const jobs = specificJobModel(jobId);
    return res.render("jobs/detail", {
      job: jobs.length == 1 ? jobs[0] : [],
      applicantCount: jobs.length == 1 ? jobs[0]?.applicants.length : 0,
      errorMessage: validationErrors.errors[0].msg,
    });
    // return res.status(401).send({
    //   message: validationErrors.errors[0].msg,
    //   success: false,
    // });
  }
  next();
};

export default validateJobSeekerRequest;
