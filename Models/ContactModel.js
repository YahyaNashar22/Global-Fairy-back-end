import mongoose from 'mongoose';

// Define the schema for the contact (it has the name, email, phone and message)
const Schema = mongoose.Schema;
const ContactModel = new Schema({

    name: {
        type: String,
        required:true
    },

    email: {
        type: String,
    },

    phone: {
        type: Number,
    },

    message: {
        type: String,
    },
});

// Create a mongoose model named (Contact) based on the (ContactModel) and export it
export default mongoose.model('Contact', ContactModel)