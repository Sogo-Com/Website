<script>
	import Layout from '../../+layout.svelte';

	export let data;
	let { actualite } = data;

	
</script>

<Layout>
	<div slot="buttons">
		<button class="create-button">Créer une actualite</button>
		<button class="delete-button">Supprimer l'actualite</button>
	</div>

	<div>

	</div>

</Layout>

<style lang="scss">
	



</style>
