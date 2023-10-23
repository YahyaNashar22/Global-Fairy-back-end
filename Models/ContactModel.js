import mongoose from 'mongoose';
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

export default mongoose.model('Contact', ContactModel)