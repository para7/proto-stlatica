import type { Snippet } from "svelte";

/**
 * @package
 */
export type ButtonProps = {
	children?: Snippet;
	onclick?: () => void;
};
