<script>
	import { onMount } from 'svelte';

	//DOMElements
	let linksEls;

	let containerEl;
	let imgPrincipaleEl;
	let titreEl;
	let descriptionPrincipaleEl;

	let realSecondaireEl;
	let titreSecondaireEl;
	let descriptionSecondaireEl;
	let imageSecondaireEl;
	let iconsEls = []

	//Data part
	export let data;
	const { realisationData = [] } = data;
	let iconsData = [];

	onMount((_) => {
	

		changeExpertise();
	});

	function changeExpertise(index = 0) {
		Array.from(linksEls.children).forEach((link) => {
			link.classList.remove('active');
		});
		linksEls.children[index].classList.add('active');

		const data = realisationData[index];

		containerEl.className = '';
		containerEl.classList.add(data.class);

		titreEl = data.titre;
		imgPrincipaleEl = data.imagePrincipale;
		descriptionPrincipaleEl = data.descriptionHTML;
		iconsData = data.icons;


		if(iconsData.length <= 0)
		{
			realSecondaireEl.style.display = "none"
			return
		} 

		const iconData = iconsData[0]
		
		titreSecondaireEl = iconData.titre;
		descriptionSecondaireEl = iconData.description;
		imageSecondaireEl = iconData.image

	}


	function changeIcon(index = 0){


		if(iconsData.length <= 0)
		{
			realSecondaireEl.style.display = "none"
			return
		} 


		Array.from(iconsEls.children).forEach((icon,localIndex) => {
			const localIconData = iconsData[localIndex]
			icon.src = localIconData.inactive
		})

		const actualIcon = iconsData[index]
		
		titreSecondaireEl = actualIcon.titre;
		descriptionSecondaireEl = actualIcon.description;
		imageSecondaireEl = actualIcon.image
		
		const iconEl = iconsEls.children.item(index)
		if(iconEl != null)
			iconEl.src = actualIcon.active
	}

</script>

<div id="total-expertise" bind:this={containerEl}>
	<div id="top">
		<img alt="background-sogo" src="/images/expertise-bg.png" />

		<h1><span class="gris">Nos expertises</span><br />pour vous aider</h1>
	</div>

	<div class="blanc" id="blanc">
		<div class="wrapper">
			<div class="bloc desc-gauche">
				<h2>
					<span class="grey">Nos expertises</span>
				</h2>
				<p>
					L’agence Sogo Com concentre tout plein de savoir-faire, des expériences à tous les temps,
					des compétences à tous les vents. Véritable couteau suisse, Sogo Com aiguise pour vous son
					sens aiguisé de la communication.
					<br /><br />
					→ Rédaction dans le ton<br />
					→ Relations presse en action<br />
					→ Magazines dédiés ciblés<br />
					→ Evénements dans le vent<br />
					→ Graphisme print et web dans le prisme<br />
					→ Réseaux sociaux typés pros<br />
					→ Vidéo & Photo, focus ISO<br />
					<br />
					Vous reprendrez bien un peu de Sogo ?
				</p>
			</div>
			<div class="bloc img-droite">
				<div class="conteneur">
					<img src="/images/home-equipe.png" alt="L'equipe" />
				</div>
			</div>
		</div>
	</div>

	<div class="exper-choice">
		<div bind:this={linksEls} class="links">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="link"
				on:click={() => {
					changeExpertise(0);
				}}
			>
				Rédaction
			</div>

			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="link"
				on:click={() => {
					changeExpertise(1);
				}}
			>
				Relations presses
			</div>

			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="link"
				on:click={() => {
					changeExpertise(2);
				}}
			>
				Graphisme
			</div>

			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="link"
				on:click={() => {
					changeExpertise(3);
				}}
			>
				Réseaux sociaux
			</div>

			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="link"
				on:click={() => {
					changeExpertise(4);
				}}
			>
				Photos & Vidéos
			</div>

			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="link"
				on:click={() => {
					changeExpertise(5);
				}}
			>
				Evenements
			</div>
		</div>

		<div class="contenu">
			<div class="image">
				<img src={imgPrincipaleEl} alt="sogo" />
			</div>
			<div class="texte">
				<h3 class="grey">{titreEl}</h3>
				<p bind:innerHTML={descriptionPrincipaleEl} contenteditable="false" />
			</div>
		</div>
	</div>
	<div id="realSecondaire" bind:this={realSecondaireEl} class="blanc">
		<div class="wrapper">
			<div class="bloc desc-gauche">
				<h2>
					<span class="grey">Nos réalisations</span>
				</h2>
			</div>
		</div>
		<div class="infoSlide">
			<div class="infos">
				<div class="medias" bind:this={iconsEls}>
					{#each iconsData as icon, index}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<img on:click={()=>{ changeIcon(index) }} src={ index == 0 ? icon.active : icon.inactive} alt="Real {index}" />
					{/each}
				</div>
				<div class="texte">
					<h3 class="grey">{titreSecondaireEl}</h3>
					<p bind:innerHTML={descriptionSecondaireEl} contenteditable="false" />
					<div class="btn">En savoir +</div>
				</div>
			</div>
			<div class="slider">
				
				<img src={imageSecondaireEl} alt="expertise-icon" />
				
			</div>
		</div>
	</div>
</div>

<style lang="scss" global>
	#total-expertise {
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

			h1 {
				@media only screen and (max-width: $phone) {
					padding: 64px 8px;
					width: 100%;
					text-align: center;
					font-size: 4rem;
				}

				text-align: left;
				padding: 10rem;

				.gris {
					color: $color-gris;
				}
			}
		}

		.blanc {
			background-color: #fff;
			padding: 6rem 11%;
			position: relative;
			overflow: hidden;
			@media only screen and (max-width: $phone) {
				padding: 1rem 0;
			}

			.wrapper {
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				position: relative;

				@media only screen and (max-width: $phone) {
					flex-direction: column;
					left: 0%;
				}

				h2 {
					position: relative;
					z-index: 1;
					width: fit-content;
					margin-bottom: 64px;
				}

				h2:before {
					background-color: rgba($color-bleu, 0.1);
					display: block;
					position: absolute;
					left: -5%;
					z-index: -1;
					bottom: 50%;
					border-radius: 50px;
					content: '';
					width: 70px;
					height: 70px;
				}

				h2:after {
					background-color: rgba($color-bleu, 0.1);
					display: block;
					position: absolute;
					border-radius: 50px;
					top: 25%;
					left: 90%;
					content: '';
					z-index: -1;
					width: 70px;
					height: 70px;
				}
				.bloc {
					width: 50%;

					@media only screen and (max-width: $phone) {
						width: 100%;
					}

					p {
						font-family: $font-secondary-light;
						margin-bottom: 48px;
					}
				}
				.img-droite {
					display: flex;
					justify-content: left;
					align-items: start;
					padding: 0 16px;

					@media only screen and (max-width: $phone) {
						padding: 1rem 0 0 0;
					}
					.conteneur {
						position: relative;
						width: 100%;

						@media only screen and (max-width: $phone) {
							width: 100%;
							padding: 8px;
						}

						img {
							position: relative;
							z-index: 10;
							width: 100%;
							height: 100%;
							border-radius: 32px;
						}
					}
				}
			}
		}

		.exper-choice {
			//background-color: rgba($color-violet, 0.1);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 64px 0;
			transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);

			h3 {
			}
			.links {
				align-items: center;
				width: 80%;
				height: 64px;

				@media only screen and (max-width: $phone) {
					height: fit-content;
				}

				.link {
					padding: 16px;
					@media only screen and (max-width: $phone) {
						border: none;
					}

					transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
					display: flex;
					align-items: center;
					justify-content: center;
					border-left: $color-gris-dark solid 1px;
					height: 100%;

					&:nth-child(6) {
						@media only screen and (min-width: $phone) {
							border-right: $color-gris-dark solid 1px;
						}
					}
				}
			}

			.contenu {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;

				.image {
					flex-basis: 20%;
					padding: 32px;
					img {
						width: 100%;
						height: 100%;
					}
				}

				.texte {
					flex-basis: 60%;
					padding: 64px;
				}
			}
		}

		.infoSlide {
			display: flex;

			.infos {
				display: flex;
				flex-basis: 60%;
				justify-content: start;
				align-items: start;
				.medias {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					cursor: pointer;
					img {
						margin: 8px;
						width: 64px;
						height: 64px;
						border-radius: 64px;
						transition: all cubic-bezier(0.39, 0.575, 0.565, 1) .3s;
					}
				}

				.texte {
					width: 70%;
					margin-left: 10%;
					p {
						margin-bottom: 64px;
						width: 80%;
					}
					.btn {
					}
				}
			}
			.slider {
				flex-basis: 40%;
				max-width: 40%;
				padding: 0 32px;

				.swiper-wrapper {
					width: max-content;
					height: 100%;
					display: flex;
				}
				div {
					width: 100%;
				}

				img {
					width: 100%;
					height: 100%;
					object-fit: contain;
					background-size: contain;
				}
			}
		}

		&.yellow {
			.desc-gauche {
				h2::before {
					background-color: rgba($color-jaune, 0.1);
				}

				h2::after {
					background-color: rgba($color-jaune, 0.1);
				}
			}
			.medias {
				img:hover {
					background-color: rgba($color-jaune, 0.3);
				}
			}
			.exper-choice {
				background-color: rgba($color-jaune, 0.1);
			}

			.active {
				color: $color-jaune !important;
			}

			.btn {
				background-color: $color-jaune;
			}
		}

		&.pink {
			.desc-gauche {
				h2::before {
					background-color: rgba($color-violet, 0.1);
				}

				h2::after {
					background-color: rgba($color-violet, 0.1);
				}
			}
			.medias {
				img:hover {
					background-color: rgba($color-violet, 0.3);
				}
			}
			.exper-choice {
				background-color: rgba($color-violet, 0.1);
			}

			.active {
				color: $color-violet !important;
			}

			.btn {
				background-color: $color-violet;
			}
		}

		&.blue {
			.desc-gauche {
				h2::before {
					background-color: rgba($color-bleu, 0.1);
				}

				h2::after {
					background-color: rgba($color-bleu, 0.1);
				}
			}

			.medias {
				img:hover {
					background-color: rgba($color-bleu, 0.3);
				}
			}
			.exper-choice {
				background-color: rgba($color-bleu, 0.1);
			}

			.active {
				color: $color-bleu !important;
			}

			.btn {
				background-color: $color-bleu;
			}
		}

		&.kaki {
			.desc-gauche {
				h2::before {
					background-color: rgba($color-kaki, 0.1);
				}

				h2::after {
					background-color: rgba($color-kaki, 0.1);
				}
			}

			.medias {
				img:hover {
					background-color: rgba($color-kaki, 0.3);
				}
			}
			.exper-choice {
				background-color: rgba($color-kaki, 0.1);
			}

			.active {
				color: $color-kaki !important;
			}

			.btn {
				background-color: $color-kaki;
			}
		}

		&.red {
			.desc-gauche {
				h2::before {
					background-color: rgba($color-bordeaux, 0.1);
				}

				h2::after {
					background-color: rgba($color-bordeaux, 0.1);
				}
			}

			.medias {
				img:hover {
					background-color: rgba($color-bordeaux, 0.3);
				}
			}
			.exper-choice {
				background-color: rgba($color-bordeaux, 0.1);
			}

			.active {
				color: $color-bordeaux !important;
			}

			.btn {
				background-color: $color-bordeaux;
			}
		}
	}
</style>
