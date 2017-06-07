let  request = require('superagent');
let url2 = 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=213327409d384371851777e7c7f78dfe';

let obj;
request.get(url2, (err, res)=>{
  if (err) throw err;

  //console.log(res.text);
  let  response = JSON.parse(res.text);
  let obj = response.articles;
  for(var i=0 ; i<obj.length; i++){
    console.log('author: '+ obj[i].author);

    console.log('title : '+obj[i].title);
      console.log('url : '+obj[i].url);
    console.log('++++++++++++++++++++++++++++++++++++++++++++++++++');

  }
//console.log(obj.items[4].version);
// console.log(response);


});

module.exports = obj;
