import type { Handle } from "@sveltejs/kit";
import { Hono } from "hono";

const router = new Hono()
	.get("/hello", async (c) => {
		return c.json({ message: "hello!!", method: "GET" });
	})
	.post("/hello", async (c) => {
		return c.json({ message: "hello!!", method: "POST" });
	})
	.delete("/hello", async (c) => {
		return c.json({ message: "hello!!", method: "DELETE" });
	});

export const app = new Hono().route("/api", router);

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith("/api")) {
		const app = new Hono({ strict: false }).route("/api", router);
		return app.fetch(event.request);
	}

	return resolve(event);
};
