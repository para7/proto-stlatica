<script lang="ts">
	import { PAGES } from "$lib/routes/ROUTES";
	const r = PAGES["/profile/[userid]"];

	console.log(PAGES);
	console.log(Object.entries(PAGES));

	// オブジェクト形式のPAGES を配列に変換する
	const pages = Object.entries(PAGES).map(([path, name]) => {
		if (typeof name === "string") {
			return { path, name };
		}
		return { path, name: name({ userid: "hoge" }) };
	});
</script>

{#each pages as page}
	<a href={page.path}>{page.name}</a>
{/each}

<style>
	a {
		display: block;
	}
</style>
