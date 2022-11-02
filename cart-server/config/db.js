require('dotenv').config();

const mongoose = require('mongoose');
const uri = "mongodb+srv://cart-user-1:P%40ssword1@cart-cluster.ajapg0o.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MONGO DB connection success');
    } catch (error) {
        console.log('MONGO DB connection error', error);
        process.exit(1);
    }
};

module.exports = connectDB;