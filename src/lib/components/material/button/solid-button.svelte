<script lang="ts">
	import "./button.css";
	import type { ButtonProps } from "./props";

	type Props = ButtonProps;

	let { children, onclick }: Props = $props();
</script>

<button class="button-base" {onclick}>
	{@render children?.()}
</button>

<style>
	button {
		background-color: var(--blue-10);
	}
	.button-base:active {
		background-color: var(--blue-11);
	}
</style>
