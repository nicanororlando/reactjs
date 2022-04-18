export default function List() {
  
  return (
    <>
      <h1>Subs</h1>
        <ul>
          {
            subs.map(sub => {
              return (
                <li key={sub.nick}>
                  <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
                  <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                  <p>{sub.description?.substring(0, 100)}</p> {/* Retorna un max de 100 caracteres*/}
                </li>
              )
            })
          }
        </ul>
    </>
  )
}