const setLastVisit = (req, res, next) => {
  if (req.cookies.lastVisit) {
    res.locals.lastVisit = new Date(req.cookies.lastVisit).toLocaleString();
  }
  //   when first time server intract with client then we have to set the cookie
  res.cookie("lastVisit", new Date().toISOString(), {
    // we are setting max age for 2 days, 24 hours 60 minuts, 60 seconds, 1000 miliseconds
    maxAge: 2 * 24 * 60 * 60 * 1000,
  });
  next();
};

export default setLastVisit;
