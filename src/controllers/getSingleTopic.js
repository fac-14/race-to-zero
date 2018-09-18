const topics = require('../model/topics')

exports.get = (req, res, next) => {
    const { singleTopic } = req.params;
    console.log(singleTopic)
    
    for( let i =0; i < topics.length; i++){
     if (topics[i].title.includes(singleTopic)) {
      return res.render('singletopic', { singleTopic, topics });
    } 
    }
    
  
    next();
  };
  
