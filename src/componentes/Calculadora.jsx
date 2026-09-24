import {useState} from 'react'

export function Calculadora(){
    const [num1, setNum1]= useState('');
    const [num2, setNum2]= useState('');
    const [operacion, setOperacion]= useState('suma');
    const [resultado, setResultado]= useState(null);

//funcion q realiza los calculos 
    const Calcular = (e) => {
        e.preventDefault();
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        // Validacio cajas
        if(isNaN(n1) || !num1 || isNaN(n2) || !num2){
            setResultado('Por favor, ingrese los 2 numeros');
            return;
        }
        let res;
        switch(operacion){
            case 'suma': res = n1 + n2;
                break;
            case 'resta': res = n1 - n2;
                break;
            case 'multi': res = n1 * n2;
                break;
            case 'divi': 
                if(n2=== 0){
                    res = 'No se puede dividir por 0'
                }else{
                    res = n1 / n2;
                }
                break;
            default:res=0;    
        }
        setResultado(res);
    }
    return(
        <div>
            <h2>Operaciones en React</h2>
            <form onSubmit={Calcular}>
                {/* Primer num */}
                <input type="number" placeholder='Numero 1' value={num1} onChange={(e) => setNum1(e.target.value)} />
                {/* Selector de Operaciones */}
                <select value={operacion} onChange={(e) =>setOperacion(e.target.value)}>
                    <option value="suma">Sumar</option>
                    <option value="resta">Restar</option>
                    <option value="multi">Multiplicar</option>
                    <option value="divi">Dividir</option>
                </select>
                {/* Primer num 2*/}
                <input type='number' placeholder='Numero 2' value={num2} onChange={(e) => setNum2(e.target.value)} />
                {/* Botones de accion*/}
                <button type="submit">Calcular</button>
            </form>
            {/* Mostrar los resultados*/}
            Resultado: {resultado}
        </div>
    )
}