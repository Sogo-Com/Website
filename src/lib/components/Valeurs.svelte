<script>
	import FlipCard from '$lib/components/FlipCard.svelte';
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';

	onMount((_) => {});
</script>

<div id="valeurs">
	<h2>Nos Valeurs</h2>
	<div class="conteneur">

		<p class="contenu">

		</p>
		<FlipCard class="contenu" />
		<FlipCard class="contenu"/>
		<FlipCard class="contenu"/>
		<FlipCard class="contenu"/>
		<FlipCard class="contenu"/>

	</div>
</div>

<style lang="scss">


#valeurs{

	background-color:#FCF7F7 ;

	.conteneur{

			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			flex-wrap: wrap;

		.contenu{
			flex-basis: 33.333333%;

			flex-grow: 1;
		}
	}
	

}
</style>