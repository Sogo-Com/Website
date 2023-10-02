<script>
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Pagination } from 'swiper/modules';
	let links;
	let wrapper;

	let container;
	let imgPrincipale;
	let titre;
	let descriptionPrincipale;
	let titreSecondaire;
	let icons = [];
	let descriptionSecondaire;
	let slide1;
	let slide2;
	let slide3;

	const realisationData = [
		{
			id: 'redaction',
			titre: 'Rédaction',
			class: 'yellow',
			descriptionHTML: `L’écriture pour signature, les mots qu’il faut et les textes au cordeau, tel est notre crédo.<br>
Parce qu’un contenu rédactionnel qui colle parfaitement à votre identité est un gage de notoriété et vous permet de vous démarquer, nous imaginons ensemble l’univers qui vous représentera.
<br><br>
→ Sites web<br>
→ Newsletters<br>
→ Publi-reportages<br>
→ Articles de blogs<br>
→ Actualités<br>
→ Communiqués et dossiers de presse…<br><br>

Vous avez le projet, nous avons les mots.`,
			imagePrincipale: '/images/expertise-redac.png',
			titreSecondaire: 'Web',
			descriptionBasHTML: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 

			Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 

			Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 

			Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum.`,

			slideImg1: '/images/expertise-yellow.png',
			slideImg2: '/images/expertise-yellow.png',
			slideImg3: '/images/expertise-yellow.png',

			icons: ['/images/redac-1.svg', '/images/redac-2.svg']
		},

		{
			id: 'presse',
			class: 'yellow',
			titre: 'Relations presse',
			descriptionHTML: `La relation au cœur de notre métier, l’expérience en plus, un fichier presse activé, les RP n’ont pour nous aucun secret ! Nous écrivons, mettons en forme et diffusons vos communiqués et dossiers de presse. 
<br><br>
Nous organisons vos conférences de presse et assurons le suivi de la relation avec les journalistes pour faciliter et dynamiser vos échanges.
<br><br>
→ Relations privilégiées<br>
→ Fichier qualifié<br>
→ Echanges de proximité<br>
→ Réactivité…<br><br>

Sont les flèches ciblées prêtes à être décochées.`,
			imagePrincipale: '/images/expertise-presse.png',
			titreSecondaire: 'Dossier presse',
			descriptionBasHTML: `Le dossier de presse est essentiel pour développer l’intérêt autour de vos valeurs d’entreprise, de vos compétences et de vos actions. 
<br><br>
Complet et détaillé, le dossier de presse doit être le reflet de votre identité.`,

			slideImg1: '/images/expertise-yellow.png',
			slideImg2: '/images/expertise-yellow.png',
			slideImg3: '/images/expertise-yellow.png',

			icons: ['/images/presse-1.svg', '/images/presse-2.svg', '/images/presse-3.svg']
		},
		{
			id: 'graphisme',
			titre: 'Graphisme',
			class: 'pink',

			descriptionHTML: `Parce qu’une identité forte doit être celle qui vous colle à la peau et reflète vos valeurs, nous imaginons et créons les visuels qui vous accompagneront dans toutes vos actions.
<br><br>
→ Identité visuelle<br>
→ Charte graphique<br>
→ Création de logos<br>
→ Réalisation de supports print : flyers, plaquettes, magazines, dossiers de presse, papeterie…<br>
→ Elaboration de maquettes web : sites internet, blogs, bannières…<br><br>

Confiez-nous votre image, nous la bichonnerons. Notoriété et qualité garanties.`,
			imagePrincipale: '/images/expertise-graphisme.png',

			titreSecondaire: 'Livre',
			descriptionBasHTML: `La mise en page d’un livre entier est un travail titanesque et complexe. 
<br><br>
Nous imaginons l’univers graphique qui sera le vôtre et assurons la réalisation de la maquette, de l’élaboration du chemin de fer jusqu’aux calages techniques avec l’imprimeur.`,

			slideImg1: '/images/expertise-purple.png',
			slideImg2: '/images/expertise-purple.png',
			slideImg3: '/images/expertise-purple.png',

			icons: [
				'/images/graph-1.svg',
				'/images/graph-2.svg',
				'/images/graph-3.svg',
				'/images/graph-4.svg',
				'/images/graph-5.svg',
				'/images/graph-6.svg'
			]
		},
		{
			id: 'reseaux',
			titre: 'Réseaux Sociaux',
			class: 'blue',

			descriptionHTML: `Stratégie, notoriété, présence, comment activer ses réseaux sociaux et se démarquer ? Autant de questions auxquelles nous répondons. Facebook, Instagram, Linkedin, Twitter, Tik Tok… A chaque réseau sa stratégie et son contenu spécifique. Nous vous orientons et animons pour vous la toile en fonction de vos objectifs.
<br><br>
→ Création de contenu rédactionnel et visuel<br>
→ Planification des actions<br>
→ Stratégie social media<br>
→ Community Management<br>
<br>
Laissez-nous vous guider pour optimiser vos actions sur les médias sociaux et accroitre votre e-réputation.`,
			imagePrincipale: '/images/expertise-reseaux.png',
			titreSecondaire: 'Facebook',
			descriptionBasHTML: `Photos, vidéos, partages de lien et questions interactives sont les contenus les mieux véhiculés sur Facebook, à nous de trouver le bon rythme et les meilleurs accroches pour valoriser votre entreprise.
<br><br>
C’est la synergie entre visuel, propos, choix des hashtags et interactions qui vous garantira efficacité et pertinence.`,

			slideImg1: '/images/expertise-blue.png',
			slideImg2: '/images/expertise-blue.png',
			slideImg3: '/images/expertise-blue.png',

			icons: ['/images/reseaux-1.svg', '/images/reseaux-2.svg', '/images/reseaux-3.svg']
		},
		{
			id: 'photos',
			titre: 'Photos et vidéos',
			class: 'kaki',

			descriptionHTML: `Parce que les images en disent long, nous les pensons en amont. En contre-plongée ou dans les airs, en fixe ou en mouvement, photos et vidéos accompagnent les mots.
<br><br>
→ Photos<br>
→ Prises de vue aériennes avec drone<br>
→ Vidéos : teasers, interviews, témoignages, reportages…<br>
<br>
Zoom sur l’image, le tournage et le montage sont aussi dans notre rayon. Action.`,
			imagePrincipale: '/images/expertise-photos.png',
			titreSecondaire: 'Photos',
			descriptionBasHTML: `Que ce soit pour le web ou pour le print, avoir des photos haute définition, bien anglées, mises en scène et variées est un pré-requis incontournable à toute communication qualitative. 
<br><br>
Votre image en dépend et la confiance que l’on vous accordera aussi. Misez sur l’image n’est pas une option, faites-nous confiance.`,

			slideImg1: '/images/expertise-kaki.png',
			slideImg2: '/images/expertise-kaki.png',
			slideImg3: '/images/expertise-kaki.png',

			icons: ['/images/photos-1.svg', '/images/photos-2.svg', '/images/photos-3.svg']
		},

		{
			id: 'evenement',
			titre: 'Événement B to B',
			class: 'red',

			descriptionHTML: `Organiser un événement professionnel c’est savoir compiler une multitude de paramètres pour créer la synergie parfaite. Confiez-nous vos envies, nous trouverons le lieu idéal et le concept qui marquera les esprits.
<br><br>
→ Evénements d’entreprises<br>
→ Petits-déjeuners thématiques<br>
→ Rencontres dégustation<br>
→ Conférences de presse…<br>
<br>
N’hésitez pas à nous confier vos projets, nous imaginons tous vos événements à la demande.`,
			imagePrincipale: '/images/expertise-evenement.png',
			titreSecondaire: 'Convention',
			descriptionBasHTML: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 
<br><br>
Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 
`,

			slideImg1: '/images/expertise-red.png',
			slideImg2: '/images/expertise-red.png',
			slideImg3: '/images/expertise-red.png',

			icons: [
				'/images/evenement-1.svg',
				'/images/evenement-2.svg',
				'/images/evenement-3.svg',
				'/images/evenement-3.svg'
			]
		}
	];

	onMount((_) => {
		const swiper = new Swiper('.swiper-container', {
			modules: [Pagination],
			// loop: true,

			// If we need pagination
			pagination: {
				clickable: true,
				el: '.pagination'
			}
		});

		changeExpertise();
	});

	function changeExpertise(index = 0) {
		Array.from(links.children).forEach((link) => {
			link.classList.remove('active');
		});
		links.children[index].classList.add('active');

		const data = realisationData[index];

		container.className = '';
		container.classList.add(data.class);

		titre = data.titre;
		imgPrincipale = data.imagePrincipale;
		descriptionPrincipale = data.descriptionHTML;
		titreSecondaire = data.titreSecondaire;
		descriptionSecondaire = data.descriptionBasHTML;
		slide1 = data.slideImg1;
		slide2 = data.slideImg2;
		slide3 = data.slideImg3;
		icons = data.icons;
	}
</script>

<div id="total-expertise" bind:this={container}>
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
		<div bind:this={links} class="links">
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
				<img src={imgPrincipale} alt="sogo" />
			</div>
			<div class="texte">
				<h3 class="grey">{titre}</h3>
				<p bind:innerHTML={descriptionPrincipale} contenteditable="false" />
			</div>
		</div>
	</div>
	<div class="blanc">
		<div class="wrapper">
			<div class="bloc desc-gauche">
				<h2>
					<span class="grey">Nos réalisations</span>
				</h2>
			</div>
		</div>
		<div class="infoSlide">
			<div class="infos">
				<div class="medias">
					{#each icons as icon, index}
						<img src={icon} alt="Real {index}" />
					{/each}
				</div>
				<div class="texte">
					<h3 class="grey">{titreSecondaire}</h3>
					<p bind:innerHTML={descriptionSecondaire} contenteditable="false" />
					<div class="btn">En savoir +</div>
				</div>
			</div>
			<div class="slider">
				<div class="swiper-container">
					<div bind:this={wrapper} class="swiper-wrapper">
						<div class="swiper-slide">
							<img src={slide1} alt="expertise-slide" />
						</div>

						<div class="swiper-slide">
							<img src={slide2} alt="expertise-slide" />
						</div>

						<div class="swiper-slide">
							<img src={slide3} alt="expertise-slide" />
						</div>
					</div>
				</div>

				<div class="pagination" />
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
					img {
						margin: 8px;
						width: 64px;
						height: 64px;
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
