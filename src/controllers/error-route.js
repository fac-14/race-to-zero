module.exports = (req, res, next) => {
  try {
    throw new Error('Simulated server errorrrrrr');
  } catch (err) {
    next(err);
  }
};