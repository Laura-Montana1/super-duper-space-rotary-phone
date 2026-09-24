import {BrowserRouter, Routes, Route} from 'react-router-dom';
// Importacion de las paginas que se van a interlazar

import {Pagina1} from '../pages/Pagina1';
import {Pagina2} from '../pages/Pagina2';
import {Contacto} from '../pages/Contacto';
import {Categorias} from '../pages/Categorias';
import {PagNoVale} from '../pages/PagNoVale';
import {Nav} from '../componentes/Nav';

export function MyRoutes(){
    return(
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={<Pagina1/>} ></Route>
                <Route path='/Pagina2' element={<Pagina2/>} ></Route>
                <Route path='/Categorias' element={<Categorias/>} ></Route>
                <Route path='/Contacto' element={<Contacto/>} ></Route>
                <Route path='*' element={<PagNoVale/>} ></Route>
            </Routes>
            
        </BrowserRouter>
    )
}