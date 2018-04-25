const express = require('express');
const router = express.Router();

//Fetch dummy messages form the database
router.get('/messages', (req, res) => controller.getMessages(req, res))


module.exports = router;