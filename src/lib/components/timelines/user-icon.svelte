<script lang="ts">
	type Props = {
		src: string;
		alt?: string;
	};
	let { src, alt = "user icon" }: Props = $props();
</script>

<img {src} {alt} />

<style>
	img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
</style>
