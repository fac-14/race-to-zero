exports.get = (req, res) => {
  res.render("intro", { layout: "logged-out" });
};
