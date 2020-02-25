const http = require("http");
const fs = require("fs"); //file system
let cicac = 0;

function main(req, res){
    console.log(req.url);
    if(req.url  == "/"){
        res.writeHead(200, {"Content-type" : "text/html"}); //znamená že to dopadlo dobře
        let s = fs.readFileSync("index.html");
        res.end(s);
    }
    else if(req.url  == "/citac"){
        cicac++;
        let obj = {};
        obj.citac = cicac;
        obj.popis = "muj prvni JSON ze serveru";
        res.writeHead(200, {"Content-type" : "application/json"});
        //res.end(`{"Citac": ${cicac}}`);
        res.end(JSON.stringify(obj));
    }else {
        res.writeHead(404, {"Content-type" : "text/html"});
        res.end();
    }
}
let srv = http.createServer(main);
srv.listen(8080);
console.log("Beží na http://localhost:8080");