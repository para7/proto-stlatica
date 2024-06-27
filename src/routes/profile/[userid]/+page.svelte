<script>
	import UserProfilePanel from "$lib/components/timelines/user-profile-panel.svelte";
</script>

<div class="container">
	<div class="panel">
		<UserProfilePanel></UserProfilePanel>
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.panel {
		max-width: 700px;
		border: solid 2px var(--gray-8);
	}
</style>
