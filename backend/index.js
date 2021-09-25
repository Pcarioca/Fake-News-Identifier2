import express, { response } from 'express';
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Website from './models/website.js'
import User from './models/user.js'
dotenv.config()
const app = express();
//Initializing MongoDB connection

 mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

//Check connection

db.once("open", () =>{
    console.log("Connected to MongoDB");
})

//Adding body-parser

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.use(cors())

//Creating port variable from env variable or setting it mannualy

const PORT = process.env.PORT || 5000;



app.post('/', (req, res) => {
    const user = new User();
    const website = new Website();
    const url = req.body.url;
    const isSafe = req.body.isSafe;
    const ip = req.body.ip;
    user.ip = ip;
    website.url = url;
    if (isSafe){
        website.upVotes = 1;
    }
    else{
        website.downVotes = 1;
    }

    User.findOne({ip}, async (err, userFound) => {
        if(userFound) {
            console.log(userFound)
            res.sendStatus(401)
            return;
        }
        await user.save((err) => {
            if (err) {
                res.sendStatus(500);
                return;
            }
            Website.findOne({url}, async (err, websiteFound) => {
                if (err) {
                    res.sendStatus(500);
                    return;
                }
                if(websiteFound) {
                   if(isSafe){
                       websiteFound.upVotes = websiteFound.upVotes + 1;
                   }
                   else{
                       websiteFound.downVotes = websiteFound.downVotes +1;
                   }
                   websiteFound.save(err => {
                       if (err) {
                           res.sendStatus(500);
                           return;
                       }
                       res.sendStatus(201)
                   })
                }
                else{
                    website.save(err => {
                        if (err) {
                            res.sendStatus(500);
                            return;
                        }
                        res.send(201)
                    })
                }
            })
        })

        
    })
})
//Listening on the PORT variable and then console logging the port
app.get('/', (req, res) => {
    const url = req.query.url;
    Website.findOne({url}, (err, websiteFound) => {
        if(websiteFound){
            res.send({upVotes: websiteFound.upVotes, downVotes: websiteFound.downVotes})
        }
        else{
            res.sendStatus(404);
        }
    })
})
app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})