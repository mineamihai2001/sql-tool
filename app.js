import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send({
        status: 'success',
        body: 'received',
    });
});

app.listen(3000, () => {
    console.log('app listening on port 3000!');
})