import {useState, useEffect} from 'react'

export const ApiPokemones= () => {
    //Variables de estado para los pokemones
    const[pokemones,setPokemones] = useState([]);
    //Lamamos ala API utilizando el hook useEffect
    useEffect(()=>{
        //Resolver las promesas
        async function obtenerPokemones(){
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
            const data = await response.json();
            //Guardamos los resultados en la variable pokemones
            setPokemones(data.results)
        }
        //ejecutar promesa
        obtenerPokemones();

    },[]) // los [] para q solo se ejecute 1 vez
    return(
        <div>
            <h1>Lista de Pokemones</h1>
            <ul>
                {
                    pokemones.map((pokemon,index)=>{
                        return(
                            <li key = {index}>
                                <strong>Nombre: {pokemon.name}</strong>
                                <strong>Url: {pokemon.url}</strong>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}