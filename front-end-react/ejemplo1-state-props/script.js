"use-strict";

const app = document.getElementById('app');
const h = React.createElement;
const useState = React.useState

/*  Con props manejamos los parametros de un componente. Con esto podemos cambiar varias
caracteristicas del componente, incluso hasta el comportamiento. */
/*  En este ejemplo en concreto, cada vez que cambian las props o que el estado del 
componente cambia, el componente se vuelve a renderizar. */
/*  Esto esta bueno xq lo que hace react es renderizar todo el componente, pero esta detectando
que es lo minimo que tiene que cambiar para que se vea el cambio y no afectar el rendimiento. */

// Utilizar props es una forma, pero de la siguiente forma podemos declarar valores por default como "name".

// const Avatar = props => {
const Avatar = ({ id, name= 'Nombre no disponble', size }) => {
    
    //Creamos un estado dentro del componente y le damos el valor inicial del componente
    //En la primera pos tenemos el estado y en la segunda para cambiar el estado
    const [enabled, setEnabled] = useState(true)  //Inicializamos en estado activo
    
    const src =`https://randomuser.me/api/portraits/women/${id}.jpg`;
    
    const imgClassName = enabled ? '' : 'disabled'; //Si esta enabled no hacemos nada 

    let pictureClassName = '';    
    if(size === 'small') pictureClassName = 'is-small';
    else if(size === 'large') pictureClassName = 'is-large';

    return (
    <picture className={pictureClassName}>
        {
            id ? (
                <img 
                onClick={()=>{
                    setEnabled(!enabled)
                }}
                className={imgClassName}    //className es equivalente a "class" en HTML.
                src={src} /> 
            ) : (
                <img
                    src={`https://randomuser.me/api/portraits/lego/6.jpg`} />
            )
        }
          
        <strong>{name}</strong>
    </picture>
    );
}

// //Forma vieja de dar atributos por defecto
// Avatar.defaultProps = {
//     name: "Sin nombre"
// }

ReactDOM.render(
    <div>
        <Avatar id={1} name='Debora' size='small' />
        <Avatar id={2} name='Mela' /> 
        <Avatar name='Anahi' /> 
        <Avatar id={6} size='large' /> 
    </div>,
    app
)


// Sin React ni nada:

// const Avatar = params => {
//     const src = `https://randomuser.me/api/portraits/women/${params.id}.jpg`
//     return `
//         <picture>
//             <img src="${src}">
//             ${params.name}
//         </picture>`
// }
// app.innerHTML += Avatar({ id: 1, name: 'Andrea' })
// app.innerHTML += Avatar({ id: 2, name: 'Pamela' })

// app.querySelectorAll('img').forEach(img => {
//     img.addEventListener('click', ()=>{
//          img.classList.toggle('disabled')
//     })
// })           