import type { Snippet } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";

/**
 * @package
 */
export type ButtonProps = {
	type: HTMLButtonAttributes["type"];
	children?: Snippet;
	onclick?: () => void;
};
