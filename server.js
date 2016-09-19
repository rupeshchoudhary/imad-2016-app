var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
  title: 'Article One | Rupesh Choudhary ',
  heading:'Article One',
  heading1:'Wild life',
  date:'Sep 5, 2016',
  content:` 
          <p>
          Wildlife traditionally refers to undomesticated animal species, but has come to include all plants, fungi, and other organism
          that grow or live wild in an area without being introduced by humans.
          </p>
          <p> 
          Wildlife can be found in all ecosystems. Deserts, forests, rain forests, plains, grasslands, and other areas including the most
          developed urban sites, all have distinct forms of wildlife. While the term in popular culture usually refers to animals that are
          untouched by human factors, most scientists agree that much wildlife is affected by human activities.
          </p>`
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var heading1 = data.heading1;
    var content = data.content;
    var htmlTemplate = `
<html>
  
  <head> 
  <title> ${title} </title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link href="/ui/style.css" rel="stylesheet" />
  
  </head> 
  <body>
      <div class = "container">
      
      <div>
          <a href ="/"> Home</a>
      </div>
      <hr/>
      <h3> 
      ${heading}
      </h3>
      <h3> ${heading1} </h3>
      <div>
      ${date}
      </div>
      <div> Author = Rupesh Kumar Choudhary </div>
      <div>
      ${content}
      </div>
      </div>
      
  </body>
  </html>
`;
return htmlTemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one' , function(req,res){
    res.send(createTemplate(articleOne));
    
});

app.get('/article-two' , function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
    
});

app.get('/article-three' , function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
