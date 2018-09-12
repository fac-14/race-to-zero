exports.client = (req, res) => {
  res.status(404).send('<h1>404 not found sorry</h1>');
};

exports.server = (err, req, res) => {
  res.status(500).send(`<h1>Server error: ${err.message}</h1>`)
}