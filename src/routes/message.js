const express = require('express');

const router = express.Router();

const { getMessages, addMessage } = require('../controller/message');

router.get('/message', getMessages);
router.post('/add', addMessage);

module.exports = router;
