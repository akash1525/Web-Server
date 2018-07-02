const cities = require('cities');
const url = require('url');
const http = require('http');
const app = http.createServer((request, response) = &gt; {
            var city, query;
            query = url.parse(request.url,true).query;
            if(query.zipCode) city = cities.zip_lookup(query.zipCode).city; //looking for query results from a zip code
            else city = "not found";
            response.writeHead(200, {"Content-Type":"Text/HTML"});
            response.Write('&lt;h1&gt;The city you are in is ${city}.&lt;h1&gt;');
            response.end();
            });

app.listen(3000);
