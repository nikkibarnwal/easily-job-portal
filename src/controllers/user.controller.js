import {
  changeFirstLetterUpper,
  RECRUITER_USER,
} from "../../common/utility.js";
import { handleRegisterModel, isValiduser } from "../models/user.model.js";

export const handleRegister = (req, res) => {
  // console.log("raj", req.body);
  handleRegisterModel(req.body);
  res.status(200).json({ success: true, message: "Successfully registered" });
};
export const handleLogin = (req, res) => {
  res.render("auth/login");
};
export const postLogin = (req, res) => {
  const checkUser = isValiduser(req.body);
  if (checkUser.length == 1) {
    const { id, email, name, usertype } = checkUser[0];
    req.session.user = {
      id: id,
      name: changeFirstLetterUpper(name),
      email: email,
      usertype: usertype,
      isrecruiter: usertype === RECRUITER_USER,
    };
    return res
      .status(200)
      .json({ success: true, message: "Successfully validated" });
  } else {
    return res
      .status(200)
      .send({ success: false, message: "Wrong credentials" });
  }
};
export const handleLogout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("Error while logout", err);
    } else {
      res.redirect("/login");
    }
  });
};

export const handle404 = (req, res) => {
  res.render("404");
};
