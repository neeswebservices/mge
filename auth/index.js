import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
    return res.send('hi sir');
});

app.listen(process.env.PORT || 8002, () => {
    console.log('server started on port ', process.env.PORT);
});
