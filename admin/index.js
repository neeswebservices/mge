import app from "./app.js";
import { createError } from "./config/error.js";
import { connectMongoDB } from "./config/mongoose.config.js";
import { PORT, URI } from "./env.js";
import http from "http";

const server = http.createServer(app);

await connectMongoDB(URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`server listening at port ${PORT}`);
    });
  })
  .catch((err) => {
    throw err;
  });
