var parser = require('rss-parser');
var FB = require('fb');

var arrOfMsPosts =[];

var arrOfMSlink=[];

var rss ='http://www.natureworldnews.com/rss/sections/health-medicine.xml';
function randomMS(max,min){
return Math.floor(Math.random()*(max-min)+min);
}

FB.setAccessToken('EAACEdEose0cBAAHJPmZAZB5aSx51SZAjiwN3Azira8f8cBHOHrwbCM5ddtd0UVGZBbqZAhlTFuctLAPxaCgHDR6Pst4sxtV6GPL7jUpReqSpamrgsv6uwqd0tsPCl9uFLxHcCLsMwOiQSwOGnaG2L9SQLUWF3r0gFheJ9qLds05nLDEbws9UPHm7CMVbRdtkZD');

parser.parseURL(rss, function(err, parsed) {


parsed.feed.entries.forEach(function(entry) {
var body =entry.title + '' ;
var linkms=entry.link+'';

arrOfMsPosts.push(body);
arrOfMSlink.push(linkms);

});

var ranNo=randomMS(arrOfMsPosts.length,0);

var postms = arrOfMsPosts[ranNo];
var linkms=arrOfMSlink[ranNo];

arrOfMsPosts.splice(ranNo,1);
arrOfMSlink.splice(ranNo,1);

console.log(postms);

      FB.api('me/feed', 'post', { message: postms,link: linkms }, function (res) {
                if(!res || res.error) {
                   console.log(!res ? 'error occurred' : res.error);
                   return;
                  }
                   console.log('Post Id: ' + res.id);
                   
                   });

});