const jwt = require("jsonwebtoken")

exports.generateTokenAndSetCookie = (userId , res)=>{
    const token = jwt.sign({userId} , process.env.JWT_SECRET , {expiresIn:"12d"})


    // cookie 

    res.cookie("jwt" , token , {
        maxAge:15*24*60*60*1000,
        httpOnly:true,      // we use bcz we cant access it using java script 
        sameSite : "strict",
        secure: process.env.NODE_ENV !== "development" 
    })
}