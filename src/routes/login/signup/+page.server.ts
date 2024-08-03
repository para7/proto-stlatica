import { redirect, type Actions } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";
import { honoClient } from "$lib/hono/honoClient";
import { supabase } from "$lib/supabase/supabase-client.server";
import * as v from "valibot";

const schema = v.object({
	id: v.string(),
	password: v.string(),
	invite_code: v.string()
});

const INVITE_CODE = "asdf";

export const actions: Actions = {
	default: async (event) => {
		const forms = await event.request.formData();

		const params = v.safeParse(schema, {
			id: forms.get("id"),
			password: forms.get("password"),
			invite_code: forms.get("invite_code")
		});

		if (!params.success) {
			return fail(400);
		}

		if (params.output.invite_code !== INVITE_CODE) {
			return fail(401, {
				message: "Invalid invite code"
			});
		}

		const res = await supabase.auth.signUp({
			email: String(params.output.id),
			password: String(params.output.password)
		});

		console.error("signup failed: ", res);

		if (res.error !== null) {
			return fail(400, {
				message: res.error.message
			});
		}

		redirect(303, "/profile/hoge");
	}
};
