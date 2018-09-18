exports.get = (req, res) => {
  res.render("landing", { layout: "logged-out" });
};
