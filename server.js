var express = require('express');
var cors = require('cors');
var http = require('http');
var bodyParser = require('body-parser');
var app, httpServer, bodyParser;

function initApp() {
    const port = 4000;
    app = express();
    app.use(cors());
    httpServer = http.Server(app);
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }));
    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
    app.use(handleError);

    httpServer.listen(port, function () {
        console.log(`Server Running On : ${port}`);
    });
} 

function handleError(err, req, res, next) {
    console.error(err);
    res.status(500).send({ error: 'An error has occurred, please contact support if the error persists' });
}

initApp();

//API Reference Start
require("./users/userApi")(app);
//API Reference End 

