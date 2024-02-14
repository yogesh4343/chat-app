const mongoose = require('mongoose');

exports.connectToMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log(" connecting to mongoDB")
    } catch (error) {
            console.log("error connecting to mongoDB" , error.message);
    }
}



// export default connectToMongoDB;

// module.exports = connectToMongoDB;