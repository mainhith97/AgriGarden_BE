const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log(`request at ${new Date()}`);
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

const http = require('http').Server(app);
http.listen(3000, () => {
     console.log('Server dang chay');
});

module.exports = app;