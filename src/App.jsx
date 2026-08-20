import './App.css';

//Creando un nuevo componente, Persona
function Person(props){
  return(
    <div className="person" style={{backgroundColor:props.color}}>
      <h3>Nombre: {props.nombre}</h3>
      <p>Edad:{props.edad}</p>
      <p>Salario:{props.sueldo}</p>
    </div>
  )
}

export default function App() {
  return (
    <div className="App">
      <h1>Hola Mundo</h1>
      {/*Aqui agrego mi componenete*/}
      <Person nombre="Laura" edad="98" sueldo="1" color="rgba(156, 134, 236, 0.27)"/>
      <Person nombre="Laura" edad="98" sueldo="1" color ="rgba(99, 61, 236, 0.68)"/>
      <Person nombre="Laura" edad="98" sueldo="1"color ="rgba(75, 30, 236, 0.84)"/>
    </div>
  );
}
