module.exports.signup_get = (req, res) => {
  res.send("sign up");
};

module.exports.login_get = (req, res) => {
  res.send("login");
};

module.exports.signup_post = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.send("new signup");
};

module.exports.login_post = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.send("user login");
};
