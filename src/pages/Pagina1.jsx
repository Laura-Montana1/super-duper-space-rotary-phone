import {Link} from 'react-router-dom';

export function Pagina1(){
    return(
        <div>
            <h1>Estoy en el Home</h1>
            <Link to = {"/pagina2"}>Ir a la Pag 2</Link>
        </div>
        
    )
}