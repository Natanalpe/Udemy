import React from 'react'


// Pode-se usar qualquer nomenclatura
// porem 'Props' é uma convenção
export default props =>[
    <h1 key='h1'>Bom Dia {props.nome}!</h1>,
    <h2>Até breve!</h2>
]



// React.Fragment é usado quando vc não quer exportar
// a div que envolveria o h1 e h2
// export default props =>
//     <React.Fragment>
//         <h1>Bom Dia {props.nome}!<br />Idade: {props.idade}</h1>
//         <h2>Até breve!</h2>
//     </React.Fragment>


// export default props =>
//     <div>
//         <h1>Bom Dia {props.nome}!<br />Idade: {props.idade}</h1>
//         <h2>Até breve!</h2>
//     </div>