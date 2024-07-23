<script lang="ts">
	import "./button.css";
	import type { ButtonProps } from "./props";

	type Props = ButtonProps;

	let { children, onclick, ...others }: Props = $props();
</script>

<button class="button-base" {onclick} {...others}>
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
