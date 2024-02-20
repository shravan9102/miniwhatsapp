const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main()
.then(() => {
    console.log("connection successful");
})
 .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}


let allChats = [
    {
     from: "neha",
     to: "priya",
     msg: "send me your exam sheets",
     created_at: new Date(),
    },
    {
     from: "rohit",
     to: "anjali",
     msg: "teach me js callbacks",
     created_at: new Date(),

    },
    {
     from: "shravan",
     to: "anjali",
     msg: "love you ",
     created_at: new Date(),  

    },
    {
     from: "vidya",
     to: "abhiraj",
     msg: "go for walk",
     created_at: new Date(),
    },
    {
     from: "ansii",
     to: "nikhil",
     msg: "do you friendship with me",
     created_at: new Date(),
    },
    {
     from: "raksha",
     to: "nikh",
     msg: "do you follow me on snapchat",
     created_at: new Date(),
    },
    {
     from: "tony",
     to: "peter",
     msg: "love you 300",
     created_at: new Date(),
    },
]; 

 Chat.insertMany(allChats);    

