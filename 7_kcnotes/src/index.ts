import { app } from "./app";
import { initDB, closeDB } from "./database";
import { loadEnv } from "./utils/load_env";
import "dotenv/config";

const { NODE_ENV } = process.env;

if (NODE_ENV === "production") {
  loadEnv();
}

const { PORT } = process.env;

initDB()
  .then(() => {
    console.log("connected to db");
    const server = app.listen(PORT, () => {
      console.log(`listening for request at port ${PORT}`);
    });

    process.on("SIGINT", async () => {
      console.log("/nshutting down server...");
      server.close(async () => {
        await closeDB();
        console.log("server has been gracefully terminated");
        process.exit(0);
      });
    });
    process.on("uncaughtException", async (err) => {
      console.log("uncaught exception", err);
      await closeDB();
      process.exit(1);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to db", err);
    process.exit(1);
  });
