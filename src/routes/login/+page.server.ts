import { Sleep } from "$lib/utilities/mock";
import { redirect, type Actions } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";
// import { createClient } from "@supabase/supabase-js";
import { supabase } from "$lib/supabase/supabase-client.server";
import { honoClient } from "$lib/hono/honoClient";

export const actions: Actions = {
	default: async (event) => {
		const forms = await event.request.formData();

		const params = {
			email: forms.get("id")?.toString() ?? "",
			password: forms.get("password")?.toString() ?? ""
		};
		const res = await honoClient.api.login.$post({ json: params });

		const result = await res.json();

		if (result.error !== null) {
			return fail(400, {
				success: false,
				message: result.error
			});
		}

		console.log(result);

		redirect(303, "/profile/hoge");
	}
};
