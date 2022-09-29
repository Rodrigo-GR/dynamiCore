import AgendaModel from "../models/AgendaModel.js"
import ContactoModel from "../models/ContactoModel.js"

export const getAllContacts = async (req, res) => {
    try {
        const contacts = await ContactoModel.findAll()
        res.json(contacts)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getContact = async (req, res) => {
    try {
        const contact = await ContactoModel.findAll({
            where:{id:req.params.id}
        })
        res.json(contact[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createContact = async (req, res) =>{
    try {
        await ContactoModel.create(req.body.contacto).then(result => {
            
            const agendaBody = {
                "IdUsuario": req.body.userID,
                "IdContacto": result.dataValues.id
            }
            AgendaModel.create(agendaBody)
        })
        res.json({
            "message": "Contacto registrado con éxito"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}


export const updateContact = async (req, res) =>{
    try {
        await ContactoModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message": "Contacto actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteContact = async (req, res) =>{
    try {
        await AgendaModel.destroy({
            where: {IdContacto: req.params.id}
        }).then(result => {
            ContactoModel.destroy({
                where: {id: req.params.id}
            })
        })
        res.json({
            "message": "Contacto eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}