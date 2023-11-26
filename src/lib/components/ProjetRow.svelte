<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let customClass='';
	export let isLeft = 'true';
	export let imgLeft;
	export let imgRight;
	export let link;
	export let title;
	export let description;

	isLeft = isLeft.toString();

</script>

<div class="sub-project {customClass} {isLeft == 'true' ? 'left' : 'right'} ">
	<div class="images {isLeft == 'false' ? 'big' : ''}">
		<img src={imgLeft} alt="{title}" />
	</div>

	{#if isLeft == 'true'}
		<div class="trait" />
	{/if}

	<div class="contenu">
		<h3>{title}</h3>
		<p class="texte">
			{description}
		</p>
		<a href="{link}" class="btn bleu">En savoir +</a>
	</div>

	{#if isLeft == 'false'}
		<div class="trait" />
	{/if}

	<div class="images {isLeft == 'true' ? 'big' : ''}">
		<img src={imgRight} alt="tomme" />
	</div>
</div>

<style lang="scss">
	.sub-project {
		width: 100%;

		&.blanc {
			background-color: #fff;

			.contenu {
				@media only screen and (max-width: $phone) {
					align-items: start;
					text-align: start;
				}
			}
		}
		&.bleu {
			background-color: rgba($color-bleu, 0.1);

			.contenu {
				@media only screen and (max-width: $phone) {
					align-items: end;
					text-align: end;
				}
			}
		}
		padding: 64px 11%;
		height: fit-content;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-evenly;
		align-items: center;
		@media only screen and (max-width: $phone) {
			flex-direction: column;
			padding: 32px 12px;
		}
		.contenu {
			max-width: 40vw;
			padding: 32px;

			@media only screen and (max-width: $phone) {
				max-width: unset;
				padding: 0px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
			h3 {
				position: relative;
				z-index: 1;
				width: fit-content;
				@media only screen and (max-width: $phone) {
					margin-bottom: 16px;
				}
			}

			h3:before {
				background-color: rgba($color-bleu, 0.1);
				display: block;
				position: absolute;
				left: -25px;
				z-index: -1;
				top: -25px;
				border-radius: 50px;
				content: '';
				width: 50px;
				height: 50px;
				@media only screen and (max-width: $phone) {
					display: none;
				}
			}

			h3:after {
				background-color: rgba($color-bleu, 0.1);
				display: block;
				position: absolute;
				border-radius: 50px;
				top: 15%;
				left: 85%;
				content: '';
				z-index: -1;
				width: 50px;
				height: 50px;
				@media only screen and (max-width: $phone) {
					display: none;
				}
			}

			.texte {
				padding: 0 0 32px 0;
				font-family: $font-secondary-light;
				@media only screen and (max-width: $phone) {
					padding: 0;
				}
			}
			.btn {
				@media only screen and (max-width: $phone) {
					margin-top: 16px;
				}

				background-color: $color-bleu;
			}
		}
		.trait {
			width: 1px;
			height: 300px;
			opacity: .5;
			background-color: $color-gris-dark;
			margin: 0 32px;
			@media only screen and (max-width: $phone) {
				display: none;
			}
		}
		.images {
			flex-basis: 15%;

			@media only screen and (max-width: $phone) {
				display: none;
			}

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				background-size: cover;
			}

			&.big {
				flex-basis: 28%;
			}
		}


		
		&.redaction {
		
			&.right{
				background-color: rgba(#e5ae1e, 0.1);
			}
			.active {
				color: #e5ae1e !important ;
			}
			.btn {
				background: #e5ae1e;
			}
		
			h3:before{
				background-color: rgba(#e5ae1e, 0.1);
			}

			h3:after{
				background-color: rgba(#e5ae1e, 0.1);
			}
		}
		&.presse {
			&.right{
				background-color: rgba(#e5ae1e, 0.1);

			}
		
			.active {
				color: #e5ae1e !important;
			}
			.btn {
				background: #e5ae1e;
			}
			

			
			
			h3:before{
				background-color: rgba(#e5ae1e, 0.1);
			}

			h3:after{
				background-color: rgba(#e5ae1e, 0.1);
			}
		}
		&.graphisme {
		
			&.right{
				background-color: rgba(#a48bad, 0.1);
			}
			.active {
				color: #a48bad;
			}
			.btn {
				background: #a48bad !important;
			}
		
			
			h3:before{
				background-color: rgba(#a48bad, 0.1);
			}

			h3:after{
				background-color: rgba(#a48bad, 0.1);
			}
		}
		&.reseaux {
			&.right{
				background-color: rgba(#2c9a9b, 0.1);
			}
		
			.active {
				color: #2c9a9b !important;
			}
			.btn {
				background: #2c9a9b;
			}
			

			
			h3:before{
				background-color: rgba(#2c9a9b, 0.1);
			}

			h3:after{
				background-color: rgba(#2c9a9b, 0.1);
			}
		}
		&.photos {
			&.right{
				background-color: rgba(#989a6f, 0.1);
			}
			
			.active {
				color: #989a6f !important;
			}
			.btn {
				background: #989a6f;
			}
			
			h3:before{
				background-color: rgba(#989a6f, 0.1);
			}

			h3:after{
				background-color: rgba(#989a6f, 0.1);
			}
		}
		&.evenements {

			&.right{
				background-color: rgba(#9d524f, 0.1);
			}

			.active {
				color: #9d524f !important;
			}
			.btn {
				background: #9d524f;
			}
			

			h3:before{
				background-color: rgba(#9d524f, 0.1);
			}

			h3:after{
				background-color: rgba(#9d524f, 0.1);
			}
		}
	}
</style>
