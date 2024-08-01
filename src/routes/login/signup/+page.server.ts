import { Sleep } from "$lib/utilities/mock";
import { type Actions } from "@sveltejs/kit";

export const actions: Actions = {
	default: async (event) => {
		// TODO log the user in
		// console.log(event);
		const r = await event.request.formData();
		console.log(r);

		await Sleep(1000);

		if (Math.random() < 0.5) {
			return {
				success: true
			};
		}
		return {
			success: false,
			message: "Login failed"
		};
	}
};
