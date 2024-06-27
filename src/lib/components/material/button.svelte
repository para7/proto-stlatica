<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children?: Snippet;
	};

	let { children }: Props = $props();
</script>

<button>
	{@render children?.()}
</button>

<style>
	/* material design blue button */
	button {
		--font-size: 1em;

		background-color: #2196f3;
		border: none;
		color: white;
		padding: var(--size-03);
		text-align: center;
		text-decoration: none;
		display: inline-block;

		font-size: var(--font-size);
		/* margin: 4px 2px; */
		cursor: pointer;
		border-radius: var(--size-03);
	}
</style>
