const express = require('express');
const router = express.Router();
const controller = require("./controller/index")

// router.get('/games', controller.header);
router.post('/form', controller.form);

module.exports = router;