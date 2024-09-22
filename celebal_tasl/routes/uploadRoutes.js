const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerConfig');
const uploadController = require('../controllers/uploadController');

router.post('/upload', upload.single('jsonFile'), uploadController.uploadFile);

module.exports = router;
