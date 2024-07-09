import type { Handle } from "@sveltejs/kit";
import { honoApp } from "$lib/hono/hono.server";

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith("/api")) {
		return honoApp.fetch(event.request);
	}

	return resolve(event);
};
