import app, { logger } from './app.js';
import { createError } from './config/error.js';
import { connectMongoDB } from './config/mongoose.config.js';
import { PORT, URI } from './env.js';
import http from 'http';

const server = http.createServer(app);

await connectMongoDB(URI)
    .then(() => {
        server.listen(PORT, () => {
            logger(`server listening at port ${PORT}`);
        });
    })
    .catch((err) => {
        throw err;
    });
