<script lang="ts">
	import type { ButtonProps } from "../material/button/props";

	type Props = {
		isFollow: boolean;
		onclick?: ButtonProps["onclick"];
	};

	let { isFollow, onclick }: Props = $props();

	import OutlineButton from "../material/button/outline-button.svelte";
	import SolidButton from "../material/button/solid-button.svelte";
</script>

<!-- <div> -->
{#if isFollow}
	<OutlineButton {onclick}>フォロー解除</OutlineButton>
{:else}
	<SolidButton {onclick}>フォロー</SolidButton>
{/if}

<!-- </div> -->

<style>
	/* div {
		display: inline-block;
		width: 8em;
		display: flex;
		justify-content: center;
	} */
</style>
