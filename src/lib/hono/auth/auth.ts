import { Hono } from "hono";
import { vValidator } from "@hono/valibot-validator";
import * as v from "valibot";
import { supabase } from "$lib/supabase/supabase-client.server";

export const router = new Hono().post(
	"/login",
	vValidator(
		"json",
		v.object({
			email: v.string(),
			password: v.string()
		})
	),
	async (c) => {
		const req = c.req.valid("json");
		console.log(req);

		const res = await supabase.auth.signInWithPassword({
			email: req.email,
			password: req.password
		});

		console.log(res);

		return c.json(res);
	}
);

export default router;
