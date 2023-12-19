import mongoose from 'mongoose';

// Define the schema for the contact (it has the name, email, phone and message)

const chatModel = new mongoose.Schema({
    text: String,
    sender: String,
  });
  
  const roomModel = new mongoose.Schema({
    name: String,
    email: String,
    userid: {   
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserSchema',
        required:true
    },
    chat: [chatModel],
  });
// Create a mongoose model and export it
export const Chat = mongoose.model('Chat', chatModel);
export const Room = mongoose.model('Room', roomModel);