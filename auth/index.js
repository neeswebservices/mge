import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('hello sir'));

app.listen(process.env.PORT || 8002, () => {
    console.log('server started on port 8002');
});
