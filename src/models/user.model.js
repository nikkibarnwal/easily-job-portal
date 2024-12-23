import { uid } from "../../common/utility.js";

export const users = [
  {
    id: 1,
    name: "Nikki Burnwal",
    email: "nikki@gmail.com",
    password: "1234",
    usertype: "recruiter",
  },
  {
    id: 2,
    name: "Reyansh Modi",
    email: "reyansh@gmail.com",
    password: "1234",
    usertype: "jobseekar",
  },
];

export const getAllUsersModel = () => {
  return users;
};

export const handleRegisterModel = (user) => {
  users.push({ ...user, id: uid() });
  console.log(users);
  return true;
};

export const isValiduser = (user) => {
  const status = users.filter(
    (u) =>
      u.email.trim() === user.email.trim() &&
      u.password.trim() === user.password.trim()
  );
  return status;
};
