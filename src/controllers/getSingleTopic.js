const topics = require('../model/topics')

exports.get = (req, res, next) => {
    const { singleTopic } = req.params;
   
    
    for( let i =0; i < topics.length; i++){
     if (topics[i].title.includes(singleTopic)) {
       const topicDetails = topics[i];
      return res.render('singletopic', { topicDetails });
    } 
    }
    
  
    next();
  };
  
