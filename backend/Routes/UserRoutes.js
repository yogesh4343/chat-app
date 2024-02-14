const express = require('express');
const { getUserForSidebar } = require('../Controllers/UserController');
const { ProtectRoute } = require('../MiddleWare/ProtectRoute');

const router = express.Router();

router.get("/",ProtectRoute ,  getUserForSidebar);

module.exports = router;