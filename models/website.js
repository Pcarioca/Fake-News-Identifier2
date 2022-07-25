import mongoose from "mongoose";


//Website schema

const website = mongoose.Schema({
    url:{
        type: String,
        required: true
    },
    downVotes:{
        type: Number,
        required: false,
        default: 0
    },
    upVotes:{
        type: Number,
        required: false,
        default: 0
    }
});

const Website = mongoose.model("website", website);
export default Website;