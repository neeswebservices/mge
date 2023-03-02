import mongoose from 'mongoose';
import app, { logger } from './app.js';
import { createError } from './config/error.js';
import { connectMongoDB } from './config/mongoose.config.js';
import { MONGOURI, PORT, URI } from './env.js';
import http from 'http';

const server = http.createServer(app);

//mongodb+srv://nees:nees@aitc.buicugl.mongodb.net/office?retryWrites=true&w=majority
connectMongoDB('mongodb://mge:mge@127.0.0.1:27017', {
    useUnifiedTopology: false,
})
    .then(() => {
        server.listen(PORT, () => {
            console.log(`server listeinign`);
        });
    })
    .catch((err) => {
        if (err) throw err;
    });
