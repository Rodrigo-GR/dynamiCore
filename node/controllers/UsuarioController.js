import UsuarioModel from "../models/UsuarioModel.js";
import AgendaModel from "../models/AgendaModel.js";
import ContactoModel from "../models/ContactoModel.js"
import { Op } from "sequelize";

export const getAllUsers = async (req, res) => {
    try {
        const users = await UsuarioModel.findAll()
        res.json(users)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await UsuarioModel.findAll({
            where:{id:req.params.id}
        })
        res.json(user[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createUser = async (req, res) =>{
    try {
        await UsuarioModel.create(req.body)
        res.json({
            "message": "Usuario registrado con éxito"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}


export const updateUser = async (req, res) =>{
    try {
        await UsuarioModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message": "Usuario actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteUser = async (req, res) =>{
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
                }).then( result => {
                    UsuarioModel.destroy({
                        where: {id: req.params.id}
                    }).then(result =>{
                        res.json({
                            "message": "Usuario eliminado correctamente"
                        })
                    })
                }
                   
                )
                
            })
        })
    } catch (error) {
        res.json({message: error.message})
    }
}