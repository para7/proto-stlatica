<script lang="ts">
	import { onMount } from "svelte";

	let data: unknown = null;
	let vali: unknown = null;

	onMount(async () => {
		fetch("/api/hello", { method: "GET" })
			.then(async (x) => {
				if (x.ok) {
					data = await x.json();
					console.log(data);
				}
			})
			.catch((e) => {
				console.error(e);
				data = e;
			});
	});

	onMount(async () => {
		fetch("/api/validate", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ id: "id" })
		})
			.then(async (x) => {
				if (x.ok) {
					vali = await x.json();
					console.log(data);
				} else {
					console.error(x);
					vali = { ...x, status: x.status, json: await x.json().catch((e) => String(e)) };
				}
			})
			.catch(async (e) => {
				console.error(e);
			});
	});
</script>

{#await data}
	<p>fetching...</p>
{:then res}
	<div>【data】</div>
	<div class="pre">{JSON.stringify(data, null, "\t")}</div>
{/await}

{#await vali}
	<p>fetching...</p>
{:then res}
	<div>【vali】</div>
	<div class="pre">{JSON.stringify(vali, null, "\t")}</div>
{/await}

<style>
	.pre {
		white-space: pre;
		margin: 1em;
		padding: 0.5em;
		background-color: var(--gray-3);
	}
</style>
