import express from "express";
import { createAgenda, deleteAgenda, getAgenda, getAllAgendas, updateAgenda } from "../controllers/AgendaController.js";
import { createContact, deleteContact, getAllContacts, getContact, updateContact } from "../controllers/ContactoController.js";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/UsuarioController.js";
const router = express.Router()

router.get('/users', getAllUsers)
router.get('/users/:id', getUser)
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

router.get('/contact', getAllContacts)
router.get('/contact/:id', getContact)
router.post('/contact', createContact)
router.put('/contact/:id', updateContact)
router.delete('/contact/:id', deleteContact)

router.get('/agendas', getAllAgendas)
router.get('/agendas/:id', getAgenda)
router.post('/agendas', createAgenda)
router.put('/agendas/:id', updateAgenda)
router.delete('/agendas/:id', deleteAgenda)

export default router