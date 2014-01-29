
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html', { title: 'Express' });
};


exports.about = function(req, res){
  res.render('about.html', { title: 'Express' });
};

exports.submit = function(req, res){
  res.render('submit.html', { title: 'Express' });
};