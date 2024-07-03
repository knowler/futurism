import { Hono } from "hono";
import { logger } from "hono/logger";
import { cache } from "hono/cache";
import { serveStatic } from "hono/deno";

const app = new Hono();
const shatter = new Hono();

app.use("*", logger());
//app.use("*", cache({
//  cacheName: "futurism",
//  cacheControl: "max-age=3600",
//  wait: true,
//}));

app.get("*", serveStatic({root: "./assets"}));

app.route("/shatter", shatter);

export default app;
