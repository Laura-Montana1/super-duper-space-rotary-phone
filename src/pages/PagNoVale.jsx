import {Link} from 'react-router-dom';

export function PagNoVale(){
    return(
        <div>
            <h1>Error 404 Pag no existe</h1>
            <Link to = {"/"}>Ir a Home</Link>
        </div>
        
    )
}