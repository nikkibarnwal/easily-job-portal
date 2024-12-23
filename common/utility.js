export const uid = () => Date.now() + Math.floor(Math.random() * 1000000000);
export const RECRUITER_USER = "recruiter";
export const JOBSEEKER_USER = "jobseekar";

export const isRecruiter = (usertype) => usertype === RECRUITER_USER;
export const changeFirstLetterUpper = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);
