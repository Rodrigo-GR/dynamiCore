import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'https://test01-dynamicore.herokuapp.com/directorio/users/'

const CompShowUsers = () => {
    const [users, setUser] = useState([])
    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const res = await axios.get(URI)
        setUser(res.data)
    }

    const deleteUser = async (id) => {
        await axios.delete(`${URI}${id}`)
        getUsers()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>Lista de Usuarios</h1>
                    <div className='row justify-content-end'>
                        <div className='col-4'>
                        <Link to="/create" className='btn btn-success mt-2 mb-2'>Agregar Usuario <i className="fa-solid fa-plus"></i></Link>
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
                           {users.map ((user) => (
                            <tr key={user.id}>
                                <td>{user.Nombre}</td>
                                <td>{user.Apellido_Paterno}</td>
                                <td>{user.Apellido_Materno}</td>
                                <td>{user.Telefono}</td>
                                <td>
                                    <Link to={`/edit/${user.id}`} className='btn btn-info m-2'><i className="fa-solid fa-pen"></i></Link>
                                    <Link to={`/showAgenda/${user.id}`} className='btn btn-warning m-2'><i className="fa-solid fa-book"></i></Link>
                                    <button onClick={ ()=> deleteUser(user.id)} className='btn btn-danger'><i className="fa-solid fa-trash-can"></i></button>
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

export default CompShowUsers