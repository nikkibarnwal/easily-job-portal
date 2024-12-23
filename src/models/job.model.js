import { uid } from "../../common/utility.js";

export const getArrIndex = (arr, id) => {
  return arr.findIndex((j) => Number(j.id) === Number(id));
};

export const postNewJobModel = (job) => {
  jobs.push({ ...job, id: uid(), applicants: [], jobposted: new Date() });
};

export const getAllJobsModel = () => {
  return jobs;
};

export const specificJobModel = (jobid) => {
  return jobs.filter((job) => Number(job.id) === Number(jobid));
};
export const updateJobModel = (job, jobId) => {
  const jobIndex = getArrIndex(jobs, jobId);
  // const jobIndex = jobs.findIndex((j) => Number(j.id) === Number(job.id));

  if (jobIndex !== -1) {
    // Ensure the job exists in the array
    jobs[jobIndex] = {
      ...jobs[jobIndex], // Spread existing fields
      ...job, // Overwrite with updated fields
    };
  }
};

export const newApplicantToAJob = (appliedBy, jobId, resumePath) => {
  const { name, email, contact } = appliedBy;
  const applicantDetails = {
    id: uid(),
    jobId: jobId,
    name: name,
    email: email,
    contact: contact,
    resume: resumePath,
  };
  applicants.push({ ...applicantDetails });
  const jobIndex = getArrIndex(jobs, jobId);
  // const jobIndex = jobs.findIndex((j) => Number(j.id) === Number(jobId));
  if (jobIndex !== -1) {
    jobs[jobIndex].applicants.push(applicantDetails);
  }
};

export const getAllApplicantToAJob = (jobId) => {
  return applicants.filter((job) => Number(job.id) === Number(jobId));
};

export const deleteJobModel = (id) => {
  const jobIndex = getArrIndex(jobs, id);
  // const jobIndex = jobs.findIndex((j) => Number(j.id) === Number(id));
  if (jobIndex !== -1) {
    jobs.splice(jobIndex, 1);
  }
};

export const jobs = [
  {
    id: 1,
    jobcategory: "Tech",
    jobdesignation: "Frontend Developer",
    joblocation: "Delhi NCR",
    companyname: "TCS",
    salary: "14-20 LPA",
    numberofopenings: 2,
    skillsrequired: [
      "React",
      "JavaSCript",
      "Redux",
      "Node JS",
      "Angular",
      "Veu JS",
    ],
    applyBy: "2024-12-21",
    jobposted: "2024-12-21",
    applicants: [
      {
        applicantid: 2,
        name: "Rajendra Burnwal",
        email: "raj@gmail.com",
        contact: "7004598765",
        resume: "resume/basic_resume.pdf",
      },
    ],
  },
  {
    id: 2,
    jobcategory: "Tech",
    jobdesignation: "Backend Developer",
    joblocation: "Pune",
    companyname: "Tech Mahindra",
    salary: "20-25 LPA",
    numberofopenings: 10,
    skillsrequired: [
      "Mongo DB",
      "JavaSCript",
      "Express",
      "Node JS",
      "Rest API",
    ],
    applyBy: "2024-12-31",
    jobposted: "2024-12-21",
    applicants: [
      {
        applicantid: 2,
        name: "Rajendra Burnwal",
        email: "raj@gmail.com",
        contact: "7004598765",
        resume: "resume/basic_resume.pdf",
      },
      {
        applicantid: 3,
        name: "Rajendra Burnwal",
        email: "raj@gmail.com",
        contact: "7004598765",
        resume: "resume/basic_resume.pdf",
      },
    ],
  },
  {
    id: 3,
    jobcategory: "Non Tech",
    jobdesignation: "SDE",
    joblocation: "Pune",
    companyname: "KPMG",
    salary: "10-15 LPA",
    numberofopenings: 8,
    skillsrequired: ["Good Communication", "Recruitment", "Activity"],
    applyBy: "2025-01-20",
    jobposted: "23-12-2024",
    applicants: [
      {
        applicantid: 1,
        name: "Nikki Burnwal",
        email: "nikki@gmail.com",
        contact: "7996754432",
        resume: "resume/basic_resume.pdf",
      },
    ],
  },
];

export const applicants = [
  {
    id: 1,
    jobId: 2,
    name: "Nikki Burnwal",
    email: "nikki@gmail.com",
    contact: "7996754432",
    resume: "resume/basic_resume.pdf",
  },
];
