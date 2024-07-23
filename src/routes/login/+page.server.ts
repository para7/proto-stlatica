import { Sleep } from "$lib/utilities/mock";
import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
	default: async (event) => {
		// TODO log the user in
		// console.log(event);
		const r = await event.request.formData();
		console.log(r);

		await Sleep(1000);

		if (Math.random() < 0.5) {
			redirect(303, "/profile/hoge");
		}
		return {
			success: false,
			message: "Login failed"
		};
	}
};
