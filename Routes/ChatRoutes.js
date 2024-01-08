import express from 'express';
import { createRoom, getAllRooms, sendChatMessage} from '../Controllers/ChatController.js'
export const chatRouter = express.Router();

//create chat room if it doesnt exist
chatRouter.post('/create', createRoom);

//send a chat and save it to the room
chatRouter.post('/send', sendChatMessage);

//get all rooms
chatRouter.get('/all', getAllRooms);


export default chatRouter;