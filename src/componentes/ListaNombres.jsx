import {useState} from 'react';

export const ListaNombres =()=>{
    //Variables de estados para los nombres
    const[nombre,setNombre] = useState('');
    const[nombres,setNombres] = useState([]);
    // Fucion para guardar
    const guardar = ()=>{
        setNombres([...nombres,nombre]);
        setNombre('');
    }
    return(
        <div>
            <p>Ingrese un nombre:</p>
            <input type="text" value={nombre} 
            onChange={(e)=> setNombre(e.target.value)} />
            <button onClick={guardar}>Enviar</button>
            <ul>
                {
                    nombres.map((elemento,index)=>{
                        return(
                            <li key={index}>{elemento}</li>
                        )
                    })
                }
            </ul>
        </div>
    )

}