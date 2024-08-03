<script lang="ts">
	import OutlineButton from "$lib/components/material/button/outline-button.svelte";
	import { applyAction, enhance } from "$app/forms";

	import type { ActionData } from "./$types";
	import { PAGES } from "$lib/routes/ROUTES";
	import Textfield from "$lib/components/form/input/textfield.svelte";
	export let form: ActionData;

	$: console.log(form);

	let loading = false;
</script>

<div class="container">
	<h1>Proto Stlatica</h1>
	<h2>Signup</h2>

	<!-- /api/auth/sinup に post する form -->
	<form
		method="post"
		use:enhance={(/*{ action, cancel, controller, formData, formElement, submitter }*/) => {
			loading = true;

			return async ({ result /*, update */ }) => {
				loading = false;
				console.log(result);

				await applyAction(result);
			};
		}}
	>
		<div class="container">
			<p class="line">
				<label class="textlabel" for="id"> ID (email) </label>
				<Textfield value="hoge" id="id" name="id" />
			</p>

			<p class="line">
				<label class="textlabel" for="password"> Password </label>
				<Textfield value="hoge" id="password" name="password" type="password" />
			</p>

			<p class="line">
				<label class="textlabel" for="invite"> Invite Code </label>
				<Textfield value="hoge" id="invite" name="invite_code" type="password" />
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
		<a href={PAGES["/login"]}>login</a>
	</div>

	{#if form !== null}
		<div class="red">
			{form.message}
		</div>
	{/if}

	<p class="notice">
		本プロジェクトは試作版です。<br />
		予告なくデータ削除・サービス停止する場合がございます。<br />あらかじめご了承ください。
	</p>
</div>

<style>
	h1 {
		text-align: center;
	}

	.red {
		color: var(--st-color-text-red);
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
