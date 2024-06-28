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
		background-color: inherit;
		border: solid 1px var(--blue-7);
		color: var(--blue-11);
	}
	.button-base:active {
		/* 透明度90%の灰色の背景色を hsl で設定 */
		background-color: hsla(0, 0%, 90%, 0.1);
	}
</style>
