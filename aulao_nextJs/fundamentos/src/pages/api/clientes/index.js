export default function handler(req, res) {
    res.status(200).send()

    req.method === 'GET' ? handlerGet() : res.status(405).send()
}

function handlerGet(req, res) {
    res.status(200).json({
        id: 1,
        name: 'Natan',
        idade: 11,
        email: 'email@email.com'
    })
}