import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'


const URI = 'https://test01-dynamicore.herokuapp.com/directorio/agendas/'
const URICONTACT = 'https://test01-dynamicore.herokuapp.com/directorio/contact/'

const CompShowAgenda = () => {
    const [agendas, setAgenda] = useState([])
    useEffect(() => {
        getAgendas()
    }, [])

    const getAgendas = async () => {
        const res = await axios.get(URI + id)
        setAgenda(res.data)
    }

    const deletecontacto = async (id) => {
        await axios.delete(`${URICONTACT}${id}`)
        getAgendas()
    }

    const deleteagenda = async (id) => {
        await axios.delete(`${URI}${id}`)
        getAgendas()
    }    

    const { id } = useParams()
    const navigate = useNavigate()

    return (
        <div className='container'>
            <h1>Lista de Contactos</h1>
            <div className='row'>
                <div className='col'>
                    <div className='row justify-content-between'>
                        <div className='col-4'>
                            <Link to={"/"} className='btn btn-primary m-2'><i className="fa-solid fa-angles-left"></i> Regresar</Link>
                        </div>
                        <div className='col-4'>
                        <Link to={"/createContact/" + id} className='btn btn-success m-2'>Nuevo contacto  <i className="fa-solid fa-plus"></i></Link>
                        <button onClick={() => deleteagenda(id)} className='btn btn-danger'>Eliminar Contactos <i className="fa-solid fa-trash-can"></i></button>
                        </div>
                        
                    </div>
                    <table class="table">
                        <thead className='table-primary'>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido Paterno</th>
                                <th scope="col">Apellido Materno</th>
                                <th scope="col">Telefono</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {agendas.map((contacto) => (
                                <tr key={contacto.id}>
                                    <td>{contacto.Nombre}</td>
                                    <td>{contacto.Apellido_Paterno}</td>
                                    <td>{contacto.Apellido_Materno}</td>
                                    <td>{contacto.Telefono}</td>
                                    <td>
                                        <Link to={`/editContact/${contacto.id}/`+id} className='btn btn-info m-2'><i className="fa-solid fa-pen"></i></Link>
                                        <button onClick={() => deletecontacto(contacto.id)} className='btn btn-danger'><i className="fa-solid fa-trash-can"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )

}

export default CompShowAgenda