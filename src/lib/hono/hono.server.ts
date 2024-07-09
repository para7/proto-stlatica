import { Hono } from "hono";
import { vValidator } from "@hono/valibot-validator";
import * as v from "valibot";

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

const router2 = new Hono().post(
	"/validate",
	vValidator(
		"json",
		v.object({
			id: v.string()
		})
	),
	async (c) => {
		const req = c.req.valid("json");
		console.log(req);
		return c.json({ message: req, method: "POST" });
	}
);

// export const app = new Hono().route("/api", router);

export const honoApp = new Hono({ strict: false }).route("/api", router).route("/api", router2);

export type AppType = typeof honoApp;
