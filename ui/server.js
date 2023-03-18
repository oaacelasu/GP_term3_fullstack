// DOTENV
const dotenv = require('dotenv');
dotenv.config();

// Express
const express = require('express');
const app = express();
const port = process.env.UI_SERVER_PORT || 8000;
app.use(express.static('public'));

// Proxy
const proxy = require('http-proxy-middleware');
const {createProxyMiddleware} = require('http-proxy-middleware');

const apiProxyTarget = process.env.API_PROXY_TARGET;

if (apiProxyTarget) {
    const proxyMiddleware = createProxyMiddleware({
        target: apiProxyTarget, // the URL to the server you want to proxy to
        changeOrigin: true // changes the origin of the host header to the target URL
    });
    app.use('/graphql', proxyMiddleware);
}

// Body Parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// Routes
const router = require('./routes.js');
app.use('/#/dashboard/', router);


// Start Server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/#/dashboard/`)
});
