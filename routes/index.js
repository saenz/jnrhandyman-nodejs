
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'J & R Handyman' });
};

exports.contactus = function(req, res) {
  res.render('contactus', { title: 'J & R Handyman' });
};