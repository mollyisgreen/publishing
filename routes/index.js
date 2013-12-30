
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html', { title: 'Express' });
};


exports.autocomplete = function(req, res){
  res.render('autocomplete.html', { title: 'Express' });
};