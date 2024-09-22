const express = require('express');
const router = express.Router();
const uploadjson = require('../controllers/uploadJson');

router.post('/upload-json', uploadjson.uploadJSONData);

module.exports = router;
