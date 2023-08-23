<script>
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';
	import Valeurs from '$lib/components/Valeurs.svelte';
	onMount((_) => {});
</script>

<div id="top">
	<img alt="background-sogo" src="/images/agence-bg.png" />

	<h1><span class="pink">{$t('agence.titre-1')}</span><br />{$t('agence.titre-2')}</h1>
</div>

<div id="guillemets">
	<div class="bloc-container">
		<div class="bloc-seul">

			<div class="left">
				<img src="/images/guillemet-gauche.PNG" alt="guillemet gauche">
			</div>
			<div class="center">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 
				</p>
				<p>

					Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum.
				</p>
			</div>
			<div class="right">
				<img src="/images/guillemet-droit.PNG"  alt="guillemet droit">
			</div>
			
		</div>
	</div>
</div>
<Valeurs/>
<style lang="scss">
	#top {
		height: 100vh;
		width: 100%;
		overflow: hidden;
		position: relative;
		display: flex;
		justify-content: start;
		align-items: end;
		img {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			z-index: 10;
			background-size: cover;
			object-fit: cover;
		}

		h1 {
			text-align: left;
			font-size: 5rem;
			padding: 7rem;

			.pink {
				color: $color-rose;
			}
		}
	}


	#guillemets{
		background-color: #fff;
		.bloc-container{
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			.bloc-seul{
				width: 60%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				flex-wrap: nowrap;
				position: relative;
				text-align: center;
				padding: 64px;

				div{
					margin: 16px 0;
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					img{
						width: 100px;
						height: 100px;
						object-fit: contain;
					}
				}
				.left{
					justify-content: start;
				}
				.center{
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}
				.right{
					justify-content: right;
				}
			}
		}
	}
</style>
