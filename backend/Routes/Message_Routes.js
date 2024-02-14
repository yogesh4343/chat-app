const express = require('express');
const { SendMessage, getMessages } = require('../Controllers/Message_Controllers');
const { ProtectRoute } = require('../MiddleWare/ProtectRoute');

const router = express.Router();

router.post("/send/:id" ,ProtectRoute, SendMessage);
router.get("/:id" ,ProtectRoute , getMessages) ;  // to get all messages of a specific user or chat room





module.exports = router;