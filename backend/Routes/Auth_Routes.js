
const express = require('express');
const { Signup, Login, Logout } = require('../Controllers/Auth_Controllers');

const router = express.Router();

// app.get("/api/auth/signup", (req,res)=>{
//         console.log("signup route")
//     });


// router.get("/login",(req,res,next)=>{
//     res.send("login route")
// })

router.post("/signup" , Signup);
router.post("/login" , Login);
router.post("/logout" , Logout);


module.exports = router;