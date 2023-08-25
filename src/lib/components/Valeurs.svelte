<script>
	import FlipCard from '$lib/components/FlipCard.svelte';
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';

	onMount((_) => {});
</script>

<div id="valeurs">
	<h2><span class="pink">Nos Valeurs</span></h2>
	<div class="conteneur">
		<div class="contenu">
			<p class="flip">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 

Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. . 
			</p>
		</div>
		<div class="contenu">
			<div class="flip">
				<FlipCard />
			</div>
			
		</div>

		<div class="contenu">
			<div class="flip">
				<FlipCard />
			</div>
		</div>
		<div class="contenu">
			<div class="flip">
				<FlipCard />
			</div>
		</div>
		<div class="contenu">
			<div class="flip">
				<FlipCard />
			</div>
		</div>
		<div class="contenu">
			<div class="flip">
				<FlipCard />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	#valeurs {
		background-color: #fcf7f7;
		padding-bottom: 64px;
		h2{
			padding: 64px 0 0 64px;
		}
		.conteneur {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			flex-wrap: wrap;


			.contenu {
				padding: 64px;
				flex-basis: 33.333333%;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-grow: 1;

				p{
					font-size: 0.8rem;
				}
				.flip {
					width: 250px;
					height: 250px;
				}
			}
		}
	}
</style>
