exports.get = (req, res) => {
  res.render("learn", { activePage: { learn: true } });
};
