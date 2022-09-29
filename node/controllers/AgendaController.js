import AgendaModel from "../models/AgendaModel.js";




import ContactoModel from "../models/ContactoModel.js";

import { Op } from "sequelize";

export const getAllAgendas = async (req, res) => {
    try {
        const agendas = await AgendaModel.findAll()
        res.json(agendas)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getAgenda = async (req, res) => {
    const arrayContacts = []
    try {
        await AgendaModel.findAll({
            where:{IdUsuario:req.params.id}
        }).then(result =>{
            result.forEach(element => {
                arrayContacts.push(element.dataValues.IdContacto)
            });
            ContactoModel.findAll({
                where: {
                    id:{
                        [Op.in]: arrayContacts}
                }
            }).then(result=>{
                res.json(result)
            })
        })
        
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createAgenda = async (req, res) =>{
    try {
        await AgendaModel.create(req.body)
        res.json({
            "message": "Usuario registrado con éxito"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}


export const updateAgenda = async (req, res) =>{
    try {
        await AgendaModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message": "Usuario actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteAgenda = async (req, res) =>{
    var agendaArray = []
    try {

        await AgendaModel.findAll({
            where:{IdUsuario:req.params.id}
        }).then(result => {
            
            result.forEach(element => {
                agendaArray.push(element.dataValues.IdContacto)
            });
            AgendaModel.destroy({
                where: {IdUsuario: req.params.id}
            }).then(result =>{
                console.log('agendaArray',agendaArray)
                
                ContactoModel.destroy({
                    where: {
                        id:{
                            [Op.in]: agendaArray}
                    }
                })
            })
        })
        
        res.json({
            "message": "Agenda eliminada del usuario " + req.params.id
        })
    } catch (error) {
        res.json({message: error.message})
    }
}