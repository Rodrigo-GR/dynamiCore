import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams} from "react-router-dom";

const URI = 'https://test01-dynamicore.herokuapp.com/directorio/contact'

const CompCreateContact = () =>{
    const [Nombre, setNombre] = useState('')
    const [Apellido_Paterno, setApellido_Paterno] = useState('')
    const [Apellido_Materno, setApellido_Materno] = useState('')
    const [Telefono, setTelefono] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()
    
    const store = async (e) =>{
        e.preventDefault()
        await axios.post(URI, {
            userID: id,
            contacto: {
                Nombre: Nombre,
                Apellido_Paterno: Apellido_Paterno,
                Apellido_Materno: Apellido_Materno,
                Telefono: Telefono
            }
            
        })
        navigate('/showAgenda/'+id)
    }

    return (
        <div className="container row">
            <h1>Agregar Contacto</h1>
            <div className="col-5"></div>
            <div className="text-center col-3 mt-3">
            <form onSubmit={store} className=" text-center">
                <div className="mb-3 text-center">
                    <label className="form-label">Nombre</label>
                    <input
                        value={Nombre}
                        onChange={ (e)=> setNombre(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido Paterno</label>
                    <input
                        value={Apellido_Paterno}
                        onChange={ (e)=> setApellido_Paterno(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido Materno</label>
                    <input
                        value={Apellido_Materno}
                        onChange={ (e)=> setApellido_Materno(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <input
                        value={Telefono}
                        onChange={ (e)=> setTelefono(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
                
            </form>
            </div>
        </div>
    )
}

export default CompCreateContact