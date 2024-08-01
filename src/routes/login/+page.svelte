<script lang="ts">
	import OutlineButton from "$lib/components/material/button/outline-button.svelte";
	// import SolidButton from "$lib/components/material/button/solid-button.svelte";
	import { applyAction, enhance } from "$app/forms";

	import type { ActionData } from "./$types";
	import Textfield from "$lib/components/form/input/textfield.svelte";
	export let form: ActionData;

	let loading = false;

	$: console.log(form);
</script>

<div class="container">
	<h1>Proto Stlatica</h1>
	<h2>Login</h2>

	<form
		method="post"
		use:enhance={(/*{ action, cancel, controller, formData, formElement, submitter }*/) => {
			// cancel();
			loading = true;

			return async ({ result /*, update */ }) => {
				loading = false;
				console.log(result);

				await applyAction(result);
				// // if (result.type === "redirect") {
				// // 	goto(result.location);
				// // } else {
				// // 	await applyAction(result);
				// // }
				// // await update();
			};
		}}
	>
		<div class="container">
			<p class="line">
				<label class="textlabel" for="id"> ID </label>
				<!-- <input id="id" name="id" /> -->
				<Textfield id="id" name="id"></Textfield>
			</p>
			<p class="line">
				<label class="textlabel" for="pass"> Password </label>
				<Textfield id="pass" name="pass" type="password" />
			</p>
			<!-- <SolidButton type="submit">Login</SolidButton> -->
			<OutlineButton type="submit">
				{#if loading}
					Loading...
				{:else}
					Login
				{/if}
			</OutlineButton>
		</div>
	</form>

	<div>
		<a href="/login/signup">signup</a>
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

	.container {
		display: flex;
		flex-direction: column;
		gap: 1em;
		width: 100%;
		align-items: center;
	}
</style>
