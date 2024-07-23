<script lang="ts">
	import OutlineButton from "$lib/components/material/button/outline-button.svelte";
	import { applyAction, enhance } from "$app/forms";

	import type { ActionData } from "./$types";
	export let form: ActionData;

	let loading = false;

	$: console.log(form);
</script>

<div class="container">
	<h1>Proto Stlatica</h1>
	<h2>Signup</h2>

	<form
		method="post"
		use:enhance={(/*{ action, cancel, controller, formData, formElement, submitter }*/) => {
			// cancel();
			loading = true;

			return async ({ result }) => {
				loading = false;
				console.log(result);

				await applyAction(result);
			};
		}}
	>
		<div class="container">
			<p class="line">
				<label class="textlabel" for="id"> ID (email) </label>
				<input id="id" name="id" />
			</p>
			<p class="line">
				<label class="textlabel" for="pass"> Password </label>
				<input id="pass" name="pass" type="password" />
			</p>

			<p class="notice">
				本プロダクトは試作版です。<br />
				予告なくデータ削除・サービス停止する場合がございます。<br />あらかじめご了承ください。
			</p>

			<!-- <SolidButton type="submit">Login</SolidButton> -->
			<OutlineButton type="submit">
				{#if loading}
					Loading...
				{:else}
					Register
				{/if}
			</OutlineButton>
		</div>
	</form>

	<div>
		<a href="/login">login</a>
	</div>
</div>

<style>
	h1 {
		text-align: center;
	}

	label {
		display: block;
	}

	.line {
		display: flex;
		flex-direction: column;
	}

	.notice {
		width: 80%;
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 1em;
		width: 100%;
		align-items: center;
	}
</style>
