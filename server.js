var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
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

},
    'article-two' : {
        title: 'Article Two | Rupesh Choudhary ',
  heading:'Article Two',
  heading1:'Technology',
  date:'Sep 10, 2016',
  content:` 
          <p>
          Technology is the collection of techniques, skills, methods and processes used in the production of goods or services or in the
          accomplishment of objectives, such as scientific investigation. Technology can be the knowledge of techniques, processes, etc.
          or it can be embedded in machines, computers, devices and factories, which can be operated by individuals without detailed
          knowledge of the workings of such things.
          </p>
          <p> 
          Stay up-to-date on the newest technology news and future technology from the editors at Pop Sci Magazine.
          </p>`
    },
    'article-three' : {
       title: 'Article Three | Rupesh Choudhary ',
  heading:'Article Three',
  heading1:'Pollution',
  date:'Sep 20, 2016',
  content:` 
          <p>
          Pollution is the introduction of contaminants into the natural environment that cause adverse change.[1] Pollution can take the
          form of chemical substances or energy, such as noise, heat or light. Pollutants, the components of pollution, can be either
          foreign substances/energies or naturally occurring contaminants. Pollution is often classed as point source or nonpoint source
          pollution.
          </p>
          <p> 
          Environmental pollution is one of the greatest problems that the world is facing today causing grave and irreparable damage to
          the earth, damaged atmosphere..........
          </p>` 
    },
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
  <title>
  ${title}
  </title>
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

var counter = 0;
app.get('/counter', function (req,res){
    counter = counter +1;
    res.send(counter.toString());
});

app.get('/:articleName' , function(req,res){
    //articleName == article-one
    //articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-name', function(req, res){
    //get the name from request
    var name = req.query.name;
    
    names.push(name);
    // json
    res.send(JSON.stringify(names));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
