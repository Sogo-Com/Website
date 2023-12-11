<script>
	export let pointsHistoriques;
</script>

{#if pointsHistoriques != null && pointsHistoriques.length == 5}
	<div id="histoire" class="blanc">
		<div class="h2-seo end">
			<h2 animate><span class="pink">Notre histoire</span></h2>
		</div>

		<div class="wrapper">
			<div animate class="frise">
				{#each pointsHistoriques as pointHistorique, index}
					<div
						style="--esp:{index * 10}vw; --endline:{index == 4 ? '40vw' : '0'}; --line:{index != 0
							? '10vw'
							: '0'}; --index:{5 - index};"
						class="point {index == 3 ? 'decal' : ''}  {index == 2 ? 're' : ''}"
					>
						<div class="innerText">{pointHistorique.date}</div>
						<div class="innerStartLine" />
						<div class="innerEndLine" />
						<div class="innerPoint {index % 2 == 0 ? 'top' : 'bottom'}">
							<h3>{pointHistorique.titre}</h3>
							<p>
								{pointHistorique.description}
							</p>
						</div>
						{#if index == 3}
						<div class="spacer">
							<p >
								4 nouvelles Gommettes arrivent…<br />
								Nouvelles expertises : <br />
								événementiel et community management
							</p>
						</div>
							
						{/if}
					</div>
				{/each}
				
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	#histoire {
		background: #fff;

		.h2-seo {
			@media only screen and (max-width: $tablet) {
				padding-bottom: 32px;
			}
			h2 {
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
				left: 11%;

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
				height: calc(85vw + 300px);
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
				width: 75px;
				height: 75px;
				border-radius: 75px;
				background-color: $color-rose;
				display: flex;
				justify-content: center;
				align-items: center;

				&.decal {
					margin-left: 10vw;
					@media only screen and (max-width: $phone) {
						margin-left: 0;
						margin-top: 10vw;
						}
					.innerStartLine {
						width: calc(var(--line) * 2);
						@media only screen and (max-width: $phone) {
							width: 1px;
							height: calc(var(--line) * 2);
					
						}
					}
				}

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

				.spacer {
					width: 20vw;
					right: calc(100% );
					text-align: center;
					top: 100%;
					position: absolute;
					
					@media only screen and (max-width: $phone) {
						width: 50vw;
					
						top: -80%;
   						left: 100%;
					}

					p{
						font-size: 0.8rem;
						line-height: 1rem;
						@media only screen and (max-width: $phone) {
							width: 100%;
							text-align: left;
						}
					}
				
				}
				.innerText {
					font-family: $font-secondary-light;
					font-size: 0.9rem;
					text-align: center;
				}
				.innerPoint {
					padding: 64px 16px;
					position: absolute;
					text-align: center;

					//right: calc(100% - 68px);
					@media only screen and (max-width: $phone) {
						padding: 0 32px;
						width: 80vw;
					}

					h3 {
						margin-bottom: 8px;
						text-align: center;
						color: #000;
						@media only screen and (max-width: $phone) {
							width: 100%;
							text-align: left;
						}
					}
					p {
						width: 20vw;
						font-size: 0.8rem;
						line-height: 1rem;
						@media only screen and (max-width: $phone) {
							width: 100%;
							text-align: left;
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
