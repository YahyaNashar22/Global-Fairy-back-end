import Contact from "../Models/ContactModel.js";

export const ContactController ={

// Controller function to add a new contact
addContact: async (req,res) => {
    try{
        const contact = new Contact(req.body)
        await contact.save()
        res.status(200).json(contact)
    }
    catch (error) {
        res.status(404).json({status:404,error:error.message})

    }
},

// Controller function to fetch contact
getContact: async (req, res) => {
    try {
        const contacts = await Contact.find()
        res.status(200).json(contacts)
    }
    catch (error) {
        res.status(404).json({ status: 404, error: error.message })
    }
},
}