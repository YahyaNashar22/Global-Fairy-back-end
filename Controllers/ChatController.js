import UserSchema from "../Models/usersModel.js";
import { Chat, Room } from '../Models/chatModel.js';


export const createRoom = async (req,res)=>{
    const {name, userid} = req.body;

    try{
        await UserSchema.findOne({_id: userid});
    } catch (error){
        console.log("invalid user!!!")
        res.send("invalid user!")
    }
    const room = await Room.findOne({userid: userid})

    if(!room){

        const defaultMessage = new Chat({
            text: 'Welcome! How can I help you?',
            sender: 'admin',
        })

        const newRoom = new Room({
            name,
            userid,
            chat :  [defaultMessage],
          });

          newRoom.save()
          res.json(newRoom);
    }

    

    res.status(200).json(room);
} 

export const sendChatMessage = async (req, res)=>{
    const {userId, sender, text} = req.body;
    const room = await Room.findOne({userid: userId})

    if(!room){
        console.log("error finding room!!!")
        res.status(401).json({error: "room can't be accessed!!!"})
        return;
    }

    room.chat.push({
        text,
        sender,
      });
  
      // Save the updated room
      await room.save();

      res.status(200).json(room.chat);
    } 

export const getAllRooms = async (req, res) =>{
    try{
    const allRooms = await Room.find({});
    if(allRooms){
    res.status(200).json(allRooms);
    }
    } catch (err){
        console.log(err.message);
        res.status(500).json({error: "can't fetch rooms...1"});
    }
 
}