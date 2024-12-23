const auth = (req, res, next) => {
  if (req.session?.user?.email) {
    next();
  } else {
    return res.redirect("/login");
  }
};
export const authRecruiter = (req, res, next) => {
  if (req.session?.user?.email) {
    if (req.session.user?.isrecruiter) {
      next();
    } else {
      return res.redirect("/404");
    }
  } else {
    return res.redirect("/login");
  }
};
export default auth;
