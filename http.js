import * as http from 'http';

const port = process.env.port || 5000 ;

const server = http.createServer((req,res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(
        '<h1>You are On the port now.</h1> <p1>I think It\'s new thing i learned today and also it\'s very imporatant</p1>'
    )
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});