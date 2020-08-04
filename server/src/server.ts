import express from 'express';

const app = express();

app.get('/users', (request, response) => {

    const users = ([
        { name: 'Marcelo', age: 26},
        { name: 'Paulo', age: 30 }
    ]);

    return response.json(users);
});


app.listen(3333);