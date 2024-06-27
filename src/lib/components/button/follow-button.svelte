<script lang="ts">
	type Props = {
		isFollow: boolean;
	};

	let { isFollow } = $props();

	import Button from "../material/button.svelte";
</script>

<div>
	<Button>
		{#if isFollow}
			フォロー解除
		{:else}
			フォロー
		{/if}
	</Button>
</div>

<style>
	div {
		--font-size: 3em;
	}
</style>
