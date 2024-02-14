const express = require('express');
const User = require("../Models/UserModel")

const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { generateTokenAndSetCookie } = require('../Utils/generateToken');


exports.Signup = async(req,res,next)=>{
    console.log("SignupUser User",)
    try {
        const {fullName , userName , password , confirmPassword , gender} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error:"Password don't match"});
        }

        const user = await User.findOne({userName})

        if(user){
            return res.status(400).json({error:"User already exists"})
        }

        // HASH PASSWORD HERE 
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password , salt);


        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = new User({
            fullName  , userName , password : hashPassword , gender , profilePic:gender ==="male" ? boyProfilePic :girlProfilePic
        })

       if(newUser){

        // generate JWT Token ===============================================================================
        // const token = jwt.sign({id:newUser._id} , "value" , {expiresIn:12})

         generateTokenAndSetCookie(newUser._id , res);


        await newUser.save();

        return res.status(201).json({
            _id : newUser._id,
            fullName:newUser.fullName,
            userName:newUser.userName,
            profilePic:newUser.profilePic
        })
       }else{
        return res.status(400).json({error:"invalid user "});
       }
        
    } catch (error) {
        console.log("error in signup" , error)
    }
}



exports.Login = async(req,res,next)=>{
    // res.send("Login route")
    // console.log("Login User",)
    try {

        const {userName , password} = req.body;
        const user = await User.findOne({userName});
        const isPasswordCorrect = await bcrypt.compare(password , user?.password || "")  ;

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"invalid userName or Password "});
        }
        generateTokenAndSetCookie(user._id , res)

        return res.status(201).json({
            _id : user._id,
            fullName:user.fullName,
            userName:user.userName,
            profilePic:user.profilePic
        })



     } catch (error) {
            console.log("error in signup" , error)
        }
}


exports.Logout = async(req,res,next)=>{
    // res.send("Logout route")
    // console.log("LogoutUser User",)
    try {
        res.cookie("jwt" , "" , {maxAge:0})
        return res.status(200).json({error:"Logged Out "});
    } catch (error) {
        console.log("error in signup" , error)
    }
}


