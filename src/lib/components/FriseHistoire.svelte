<script>
	import FlipCard from '$lib/components/FlipCard.svelte';
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';

	onMount((_) => {});
</script>

<div id="histoire" class="blanc">
	<div class="h2-seo end">
		<h2><span class="pink">Notre histoire</span></h2>
		<p>Phrase très courte avec les mots clé pour SEO</p>
	</div>

	<div class="wrapper">
		<div class="frise">
			<div style="--esp:0; --line:0" class="point">
				<div class="innerText">
					2010
				</div>
				<div  class="innerStartLine"></div>
				<div  class="innerEndLine"></div>
				<div class="innerPoint top">
					<h3>2010</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 
					</p>
				</div>
			</div>

			<div style="--esp:15vw; --line:15vw; " class="point">
				<div class="innerText">
					2010
				</div>
				<div  class="innerStartLine"></div>
				<div  class="innerEndLine"></div>
				<div class="innerPoint bottom">
					<h3>2012</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 
					</p>
				</div>
			</div>
			<div style="--esp:30vw; --line:15vw" class="point">
				<div class="innerText">
					2010
				</div>
				<div  class="innerStartLine"></div>
				<div  class="innerEndLine"></div>
				<div class="innerPoint top">
					<h3>2010</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 
					</p>
				</div>
			</div>

			<div style="--esp:45vw; --line:15vw; --endline:30vw" class="point">
				<div class="innerText">
					2010
				</div>
				<div  class="innerStartLine"></div>
				<div  class="innerEndLine"></div>
				<div class="innerPoint bottom">
					<h3>2012</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	#histoire {
		background: #fff;

		&.blanc {
			padding: 6rem 0;
			position: relative;
			overflow: hidden;

	

			.wrapper {
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				position: relative;
				left: 12%;
			}
		}


		.frise{
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			align-items: center;
			height: 450px;
			width: 100%;
			.point{
				position:relative;
				left: var(--esp);
				width:50px;
				height: 50px;
				border-radius:50px;
				background-color: $color-rose;
				display: flex;
				justify-content: center;
				align-items: center;

				.innerStartLine{
					position: absolute;
					width: var(--line);
					height: 2px;
					background-color: $color-rose;
					top: 50%;
					right: 100%;
				}

				.innerEndLine{
					position: absolute;
					width: var(--endline);
					height: 0px;
					border: none;
  					border-top: 1px dashed $color-rose;
					border-bottom: 1px dashed $color-rose;
					top: 50%;
					left: 100%;
				}

				.innerText{
					font-family: $font-secondary-light;
					font-size: 0.8rem;

				}
				.innerPoint{
					padding: 16px;
					position: absolute;
					text-align: right;

					h3{
						margin-bottom: 8px;
					}
					p{
						width: 20vw;
						font-size: .8rem;
					}

					&.bottom{
						top: 100%;

					}

					&.top{
						bottom:100%;
					}
				}
			}
		}
	}
</style>
