import { createTransport } from "nodemailer";

export const uid = () => Date.now() + Math.floor(Math.random() * 1000000000);
export const RECRUITER_USER = "recruiter";
export const JOBSEEKER_USER = "jobseekar";

export const isRecruiter = (usertype) => usertype === RECRUITER_USER;
export const changeFirstLetterUpper = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);
const configEmail = "codingninjas2k16@gmail.com";
export const mailNow = async (toMail, subject, message) => {
  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: configEmail,
      pass: "slwvvlczduktvhdj",
    },
  });

  const configMailOption = {
    from: configEmail,
    to: toMail,
    subject: subject,
    text: message,
  };

  try {
    const result = await transporter.sendMail(configMailOption);
    console.log(`Mail has been sent to :${toMail} from : ${configEmail}`);
  } catch (error) {
    console.log("Have error while sending mail", error);
  }
};
