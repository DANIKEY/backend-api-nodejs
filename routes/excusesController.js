// Imports 

var models = require('../models');

// Routes

module.exports = {

  // register new excuses in database

  registerExcuses: function(req, res){
    
    //Params
    var tag = req.body.tag;
    var message = req.body.message;
    var http_code = req.body.http_code

    if(tag == null || message == null){
      return res.status(400).json({'error': 'missing parameters'});
    }

    models.excuses.create({
        http_code: http_code,
        tag: tag,
        message: message,
        createdAt : '',
        updatedAt: ''
    })
    .then(function(newExcuses){  
       return res.status(201).json(newExcuses)    
    })
    .catch(function(err) {
       return res.status(500).json({'error' : 'cannot add new excuses'});
    });

  },
  
  //query select all excuses databases and return data 
  getExcuses: function(req, res){
    models.excuses.findAll({
      attributes: ['http_code','tag','message'],
    })
    .then(function(excuses){
      return res.status(200).json(excuses);
    })
    .catch(function(err) {
        return res.status(500).json({'error' : 'cannot get excuses data'});
    });
  }
}