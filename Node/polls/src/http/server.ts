import fastify from 'fastify'

const app = fastify()


app.get('/hello', () => {
    return 'hello NLW 14'
})

app.listen({ port: 3333 })
    .then(() => {
        console.log('HTTP server running!')
    })