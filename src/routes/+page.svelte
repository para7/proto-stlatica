<script lang="ts">
	import Button from "$lib/components/material/button/button.svelte";
	import { PAGES } from "$lib/routes/ROUTES";
	import PageList from "./page-list.svelte";
</script>

<div class="container ut-flex-v">
	<h1>Proto Stlatica</h1>

	<p>
		SNS, inspired by tweetdeck, forked from <a href="https://github.com/stlatica/stlatica"
			>Stlatica</a
		>
	</p>

	<div class="login">
		<a href={PAGES["/login"]}>
			<Button type="button" variant="outlined">Login</Button>
		</a>
	</div>
</div>

<!-- 
<div class="debug">
	<p>debug info</p>
	<PageList></PageList>
</div>
 -->

<style>
	.container {
		margin: var(--size-14);
		text-align: center;

		gap: var(--font-size-5xl);
		margin-bottom: var(--size-31);
	}

	.login {
		font-size: var(--font-size-lg);
	}

	h1 {
		font-size: var(--font-size-5xl);
		margin-bottom: var(--font-size-2xl);
	}
</style>
