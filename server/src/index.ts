import express from 'express';


const app = express();


app.get('/', (request, response) => {
    response.json('hi')
})

app.listen(5000, () => {
    console.log('server work on port 5000')
})