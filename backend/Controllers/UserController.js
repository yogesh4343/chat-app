const UserModel = require("../Models/UserModel");

exports.getUserForSidebar = async(req,res,next)=>{


    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await UserModel.find({_id : {$ne : loggedInUserId}}).select("-password");
        return 	res.status(200).json(   filteredUsers);

    } catch (error) {
        console.log("Error in getUserForSidebar func: ", error.message);
		res.status(500).json({ error: "Internal server error" });
    }
}