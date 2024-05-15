const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.get('/details', (req, res) => {
    controller.getDetails(req, res, next => {
        res.send();

    });
});

app.post('/createdetail',(req, res) => {
    console.log(req, "fdwfr")
    controller.addDetail(req.body, (callback) => {
         res.send();
    });
});

app.post('/updatedetail',(req, res) => {
    console.log(req, "dfd")
    controller.updateDetail(req.body, (callback) => {
         res.send(callback);
    });
});

app.post('/deletedetail',(req, res) => {
    controller.deleteDetail(req.body, (callback) => {
         res.send(callback);
    });
});

module.exports = app;