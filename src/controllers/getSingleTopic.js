const topics = require('../model/topics')

exports.get = (req, res, next) => {
    const { singleTopic } = req.params;
    if (topics.includes(singleTopic)) {
      return res.render('singletopic', { singleTopic });
    }
  
    next();
  };
  
