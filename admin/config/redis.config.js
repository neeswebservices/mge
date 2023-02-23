import Redis from "redis";

/**
 * Redis Database configuration.
 */

export const client = Redis.createClient({
  port: 6379,
  host: "127.0.0.1",
});

(async () => {
  await client.connect();
})();

// client.setEx("name", 15, "nischal");

client.on("ready", () => {
  console.log("Connected to Redis Server !");
});

client.on("error", (err) => {
  console.log("Error in the Connection", +err.message);
});

client.on("end", function () {
  console.log("connection closed");
});

process.on("SIGINT", () => {
  client.quit();
});

export default client;
