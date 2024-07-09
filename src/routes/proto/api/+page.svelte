<script lang="ts">
	import { onMount } from "svelte";

	let data: unknown;

	onMount(async () => {
		fetch("http://localhost:5173/api/hello").then(async (x) => {
			if (x.ok) {
				data = await x.json();
				console.log(data);
			}
		});
	});
</script>

{#await data}
	<p>fetching...</p>
{:then res}
	<p>{JSON.stringify(data)}</p>
{/await}
