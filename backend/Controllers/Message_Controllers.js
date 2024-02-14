const express = require('express');
const ConservationSchema = require("../Models/ConversationModel");
const Message = require('../Models/MessageModel');
// const { getReceiverSocketId } = require('../socket/socket');
const { getReceiverSocketId } = require('../socket/Socket');


exports.SendMessage = async(req,res,next)=>{
    // console.log("mess", req.params.id);

   
    try {

        const {message} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id                   // this will get from "" ProtectRoute ""

        
        let conservation = await ConservationSchema.findOne({
            participants : {  $all : [senderId , receiverId] }
        });

        if(!conservation){
            conservation = await ConservationSchema.create({
                participants: [senderId , receiverId]
            })
        }

        const newMessage = new Message({
            senderId : senderId,
            receiverId : receiverId,
            message : message,
        });

        
        if(newMessage){
            conservation.messages.push(newMessage._id);
        };
        // console.log(newMessage , conservation);

        // await newMessage.save()      // save to db message               
        // await conservation.save()      // save to db conservation     In this line and promise diff is suppose it will take 1s to do task and after that next line will run bt in primise both the "conservation and message " runs same time.

        await Promise.all([conservation.save() , newMessage.save()]);


        // SOCKET IO 
        // const receiverSocketId = getReceiverSocketId(receiverId);
        // if(receiverSocketId){
        //     io.to(receiverSocketId).emit("newMessage", newMessage);
        // }

        const receiverSocketId = getReceiverSocketId(receiverId);
		if (receiverSocketId) {
            // console.log("receiverSocketId" , receiverSocketId);
			// io.to(<socket_id>).emit() used to send events to specific client
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}

        res.status(201).json(newMessage);
        
    } catch (error) {
        console.log("Internal server error" );
        return res.status(500).json({error:"Internal server error"})
    }

}




// get mess 




exports.getMessages = async(req,res,next)=>{

    try {
        // const {message} = req.body;
        const {id:userToChatId} = req.params;
        const senderId = req.user._id   

        let conservation = await ConservationSchema.findOne({
            participants : {  $all : [senderId , userToChatId] }
        }).populate("messages");

        if(!conservation){
            return res.status(200).json([])
        }

        const messages = conservation.messages;

        res.status(200).json(messages);
        

    }catch (error) {
            console.log("Internal server error" );
            // return res.status(500).json({error:"Internal server error"})
        
    }

}
