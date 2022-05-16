"use-strict";

const app = document.getElementById('app');
const useState = React.useState;

//Importante poner la primera letra en mayuscula (PascalCase) para que react reconozca.
function Contador() {   
    // // Esto es lo mismo que las 3 declaraciones siguientes.
    // const [contadorValue, actualizarContador] = useState(50);

    const contadorState = useState(50);
    let contadorValue = contadorState[0];
    let actualizarContador = contadorState[1];

    return (
        /*React solo permite renderizar un elemento a la vez (o un elemento que contenga 
        varios adentro), entoncespara que nos permita poner estos botones podemos poner
        todo dentro de un div o dentro de un React.Fragment (El ultimo es mas copado xd) */

        <React.Fragment>
            <span>{contadorValue}</span>
            <button onClick = { ()=>{ actualizarContador(contadorValue + 1) } }
            >Incrementar +</button>
            <button onClick = { ()=>{ actualizarContador(contadorValue - 1) } }
            >Decrementar -</button>
        </React.Fragment>        
    );
}

ReactDOM.render(
    <div>
        <Contador />
    </div>,
    app
)
