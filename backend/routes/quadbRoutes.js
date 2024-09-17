const express = require('express');
const router = express.Router();
const {callAPI, fetchData} = require('../controllers/quadbController')



router.get('/fetch-and-store', callAPI);


router.get('/get-data', fetchData);
  

module.exports = router;
