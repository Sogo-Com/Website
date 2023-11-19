<script>
	import FlipCard from '$lib/components/FlipCard.svelte';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	import { onMount } from 'svelte';

	onMount((_) => {

		const pointsElems = document.querySelectorAll(".point")
		const isMobile = window.matchMedia('(max-width:960px)').matches;

		gsap.registerPlugin(ScrollTrigger)
		let timeline = gsap.timeline({
			scrollTrigger:{
				trigger:"#histoire",
				start:"center center",
				end:"+=1300px",
				pin:true,
				pinSpacing:true,
				scrub:true,
			}
		})

		const props = {
			x : isMobile ? 0 : -50,
			y : isMobile ? -50 : 0
		}

		pointsElems?.forEach(pointElem => {

			timeline.fromTo(pointElem,{
				opacity:0,
				x: props.x,
				y: props.y
			},{
				opacity:1,
				x:0,
				y:0
			})

		})
	});
</script>

<div id="histoire" class="blanc">
	<div class="h2-seo end">
		<h2 animate><span class="pink">Notre histoire</span></h2>
		<p>Phrase très courte avec les mots clé pour SEO</p>
	</div>

	<div class="wrapper">
		<div class="frise">
			<div style="--esp:0; --line:0; --index:4;" class="point">
				<div class="innerText">2010</div>
				<div class="innerStartLine" />
				<div class="innerEndLine" />
				<div class="innerPoint top">
					<h3>Lancement</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis
						orci at luctus.
					</p>
				</div>
			</div>

			<div style="--esp:15vw; --line:15vw; --index:3;" class="point">
				<div class="innerText">2010</div>
				<div class="innerStartLine" />
				<div class="innerEndLine" />
				<div class="innerPoint bottom">
					<h3>Lancement</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis
						orci at luctus.
					</p>
				</div>
			</div>
			<div style="--esp:30vw; --line:15vw; --index:2;" class="point">
				<div class="innerText">2010</div>
				<div class="innerStartLine" />
				<div class="innerEndLine" />
				<div class="innerPoint top">
					<h3>Lancement</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis
						orci at luctus.
					</p>
				</div>
			</div>

			<div style="--esp:45vw; --line:15vw; --endline:40vw; --index:1;" class="point">
				<div class="innerText">2010</div>
				<div class="innerStartLine" />
				<div class="innerEndLine" />
				<div class="innerPoint bottom">
					<h3>Lancement</h3>
					<p>Le meilleur reste à venir...</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	#histoire {
		background: #fff;

		.h2-seo{
			@media only screen and (max-width: $tablet) {
				padding-bottom: 32px;
			}
			h2{
				@media only screen and (max-width: $tablet) {
					margin-bottom: 0;
				}
			}
		}
		&.blanc {
			padding: 6rem 0;
			position: relative;
			overflow: hidden;
			@media only screen and (max-width: $phone) {
				padding: 32px 12px 0 12px;
			}
			.wrapper {
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				position: relative;
				left: 22%;

				@media only screen and (max-width: $phone) {
					left: unset;
					padding: 0;
				}
			}
		}

		.frise {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			align-items: center;
			height: 450px;
			width: 100%;

			@media only screen and (max-width: $phone) {
				flex-direction: column;
				align-items: start;
				height: calc(60vw + 200px);
			}
			.point {
				position: relative;
				left: var(--esp);
				z-index: var(--index);	

				@media only screen and (max-width: $phone) {
					left: unset;
					top: var(--esp);
				}
				color: $color-blanc;
				width: 50px;
				height: 50px;
				border-radius: 50px;
				background-color: $color-rose;
				display: flex;
				justify-content: center;
				align-items: center;
				

				.innerStartLine {
					position: absolute;
					width: var(--line);
					height: 2px;
					background-color: #000;
					top: 50%;
					right: 100%;

					@media only screen and (max-width: $phone) {
						width: 1px;
						height: var(--line);
						top: unset;
						bottom: 100%;
						right: 50%;
					}
				}

				.innerEndLine {
					position: absolute;
					width: var(--endline);
					height: 0px;
					border: none;
					border-top: 1px dashed #000;
					border-bottom: 1px dashed #000;
					top: 50%;
					left: 100%;

					@media only screen and (max-width: $phone) {
						transform: rotate(90deg);
						transform-origin: left;
						top: 100%;
						left: 50%;
					}
				}

				.innerText {
					font-family: $font-secondary-light;
					font-size: 0.8rem;
				}
				.innerPoint {
					padding: 16px;
					position: absolute;
					text-align: right;
					
					right: calc(100% - 68px);
					@media only screen and (max-width: $phone) {
						padding: 0 32px;
						width: 80vw;
					}

					h3 {
						margin-bottom: 8px;
						text-align: right;
						color: #000;
						@media only screen and (max-width: $phone) {
							width: 100%;
							text-align: left;
						}
					}
					p {
						width: 20vw;
						font-size: 0.8rem;

						@media only screen and (max-width: $phone) {
							width: 100%;
							text-align: left;
							line-height: 16px;
						}
					}

					@media only screen and (max-width: $phone) {
							left: 100%;
						}

					&.bottom {
						top: 100%;

						@media only screen and (max-width: $phone) {
							top: unset;
						}
					}

					&.top {
						bottom: 100%;

						@media only screen and (max-width: $phone) {
							bottom: unset;
						}
					}
				}
			}
		}
	}
</style>
