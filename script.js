console.log('Loading a web page');
var page = require('webpage').create();
var url = 'http://phantomjs.org/';
page.open(url, function (status) {
  console.log('Page is loaded!');
  phantom.exit();
});
