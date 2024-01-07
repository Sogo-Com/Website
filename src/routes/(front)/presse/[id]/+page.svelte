<script>

	export let data;
	let { client } = data;


</script>

<div class="blanc" id="blanc">
	<div class="wrapper">
		<div class="bloc desc-gauche">
			<h1 animate>{client.nom}</h1>
			<p animate>
				{@html client.description}
			</p>

	
		</div>
		<div class="bloc img-droite">
			<div class="conteneur">
				<img src="{client.photoLogo}" alt="{client.nom}" />
			</div>
		</div>
	</div>
</div>


<style lang="scss">
	.blanc {
		background-color: #fff;
		padding: 15rem 11%;
		position: relative;
		overflow: hidden;

		.wrapper {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			position: relative;

			@media only screen and (max-width: $phone) {
				flex-direction: column;
				left: 0%;
			}

			.bloc {
				width: 50%;

				h1 {
					color: $color-gris-dark;
					padding: 32px 0;
					text-align: left;
				}

				@media only screen and (max-width: $phone) {
					width: 100%;
				}

				p {
					font-family: $font-secondary-light;
					margin-bottom: 64px;
				}

			}
			.img-droite {
				display: flex;
				justify-content: end;
				align-items: start;

				@media only screen and (max-width: $phone) {
					padding: 5rem 0 0 0;
					justify-content: center;
					align-items: center;
				}
				.conteneur {
					position: relative;
					width: 100%;
					height: 100%;
					@media only screen and (max-width: $phone) {
						transform: none;
					}

					img {
						position: relative;
						z-index: 10;
						width: 100%;
						height: 70%;
						border-radius: 32px;
						object-fit: contain;
					}
				}
			}
		}
	}

</style>
