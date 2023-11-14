<script>
	import FlipCard from '$lib/components/FlipCard.svelte';

	import { onMount } from 'svelte';

	onMount((_) => {});
</script>

<div id="top">
	<img alt="background-sogo" src="/images/agence-bg.png" />

</div>

<div class="actualite">

	<h1>
		Titre du projet
	</h1>

	<div class="actu-bar">
		<div class="author">
			<img src="/images/author.svg" alt="author">
			Gaëlle Tagliabue
		</div>

		<div class="calendar">
			<img  src="/images/calendar.svg" alt="calendar">
			30 mai 2023
		</div>

		<div class="commentary">
			<img  src="/images/commentary.svg" alt="commentary">
			5 commentaires
		</div>
	</div>

	<div class="contenu">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 

Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 

Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 

Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 

Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 

Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 

Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 

Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 

Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 

Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum.
		</p> 
	</div>
</div>

<style lang="scss">
	#top {
		height: 100vh;
		width: 100%;
		overflow: hidden;
		position: relative;
		display: flex;
		justify-content: start;
		align-items: end;

		@media only screen and (max-width: $phone) {
			align-items: center;
			}


		img {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			z-index: 10;
			background-size: cover;
			object-fit: cover;
		}
	}

	.actualite{
		z-index: 15;
		position: relative;
		border-radius: 32px;
		padding: 64px;
		margin: -400px 64px 64px 64px;
		background-color: #fff;

		h1{
			color: $color-gris-dark;
			padding:8px 0;
		}
		.actu-bar{
			margin: 32px 0;
			border-top: solid $color-gris-dark 1px;
			border-bottom: solid $color-gris-dark 1px;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			div{
				padding: 16px 0;
				display: flex;
				width: fit-content;
			
				align-items: center;
				font-family: $font-secondary-light;
				flex-grow: 1;
				text-align: left;
				img{
					padding: 0 16px;
				}
			}
			.author{
				justify-content: left;
			}
			.calendar{
				justify-content: center;
			}
			.commentary{
				justify-content: right;
			}

		}

		p{
			font-size: 0.8rem;
		}

	}
</style>
