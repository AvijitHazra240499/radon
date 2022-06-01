const express = require('express');
const externalmodule= require ('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
   console.log("The constant in logger route has a value " +externalmodule.endpoint )
   console.log('The current batch'+externalmodule.batch)
  externalmodule.log()
   res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My first & foremost ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My last ever api!')
});

module.exports = router;
// adding this comment for no reason