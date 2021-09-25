import mongoose from "mongoose";


//User schema

const user = mongoose.Schema({
    ip: {
        type: String,
        required: true
    }
});

const User = mongoose.model("user", user);
export default User;