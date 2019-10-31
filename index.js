var express = require('express');
var app = express();
var mysql = require('mysql');
const Cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requsted-With, Content-Type, Accept");
  response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
})


app.use(Cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }))
  
//criando conexão
function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
      host     : 'localhost',
      port     : 3306,
      user     : 'root',
      password : 'tEst3123',
      database : 'livraria', 
    });
   
    connection.query(sqlQry, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou!');
    });
  }
  
  var data = [];
//lista de autores
app.get('/todosautor',function(req,res){

    //res.send("fala aew");
    //res.json({data});
    execSQLQuery("select * from autor",res);

});
//lista de livros
app.get('/todoslivro',function(req,res){

    //res.send("fala aew");
    //res.json({data});
    execSQLQuery("select * from livro",res);

});
//adcionando autores
app.post('/adicionarautor',function(req,res){

  var nome = req.query.nome;
  var dataNascimento = req.query.dataNascimento;
  var biografia = req.query.biografia;

  var query = "insert into autor (nome, dataNascimento, biografia) values(" + nome + "," + dataNascimento + "," + biografia +");"
  execSQLQuery(query,res);
    console.log(query);
});
//adcionando livros
app.post('/adicionarlivro',function(req,res){

    var titulo = req.query.titulo;
    var ano = req.query.ano;
    var paginas = req.query.paginas;
    var resumo = req.query.resumo;
    var capa = req.query.capa;
    var nota = req.query.nota;

    var query = "insert into livro(titulo,ano,paginas,resumo,capa,nota)values('" + titulo + "'," + ano + ",'"+ paginas + "','" + resumo + "','" + capa + "'," + nota + ");"
    

    console.log(query);

    execSQLQuery(query,res);

});

app.listen(3000,'0.0.0.0', function () {
    console.log('Example app listening on port 3000!');
  });
