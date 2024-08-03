import { Hono } from "hono";
import { vValidator } from "@hono/valibot-validator";
import * as v from "valibot";
import { supabase } from "$lib/supabase/supabase-client.server";

const INVITE_CODE = "asdf";

export const router = new Hono()
	.post(
		"/auth/login",
		vValidator(
			"json",
			v.object({
				id: v.string(),
				password: v.string()
			})
		),
		async (c) => {
			const req = c.req.valid("json");
			// console.log(req);

			const res = await supabase.auth.signInWithPassword({
				email: req.id,
				password: req.password
			});

			console.log(res);

			return c.json(res);
		}
	)
	.post(
		"/auth/signup",
		vValidator(
			"json",
			v.object({
				id: v.string(),
				password: v.string(),
				invite_code: v.string()
			})
		),
		async (c) => {
			const req = c.req.valid("json");

			console.log(req);

			if (req.invite_code !== INVITE_CODE) {
				// 401エラーを返却
				return c.json(
					{
						error: "Invalid invite code"
					},
					401
				);
			}

			const res = await supabase.auth.signUp({
				email: req.id,
				password: req.password
			});

			console.log(res);

			return c.json(res);
		}
	);

export default router;
