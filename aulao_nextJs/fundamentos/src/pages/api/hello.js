// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    {
      name: 'Teste Api',
      metodo: req.method,
      nome: req.query.nome,
      idade: +req.query.idade
    }
  )
}

// ou
// params: JSON.stringify(req.query)
// para pegar os parametros de uma unica vez