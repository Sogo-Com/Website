<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let imageSrc;
	export let titre = 'titre';
	export let description = 'description';
	export let link;

	let container;
	let flipcard;

	onMount((_) => {
		container.addEventListener('mouseenter', (_) => {
			flipcard.style.transform = 'rotateY(180deg)';
		});

		container.addEventListener('mouseleave', (_) => {
			flipcard.style.transform = 'rotateY(0deg)';
		});


		if(typeof link !== undefined && typeof link !== null && typeof link === 'string' && link.length > 0){
			container.classList.add("active")
			container.addEventListener("click",_=>{
				goto(link)
			})
		}else
			container.classList.remove("active")
	});
</script>

	<div class="container active" bind:this={container}>
		<div id="flipcard" bind:this={flipcard}>
			<div class="front">
				<h3>{titre}</h3>
				<img src={imageSrc} alt={titre} />
			</div>
			<div class="back">
				<img src="/images/bubble.png" alt="bubble" />
				<p>
					{description}
				</p>
			</div>
		</div>
	</div>



<style lang="scss">


	.container {
		width: 100%;
		height: 100%;
		perspective: 600px;

		&.active{
			cursor: pointer;
		}

		#flipcard {
			width: 100%;
			height: 100%;

			position: relative;
			transition: all cubic-bezier(0.39, 0.575, 0.565, 1) 0.3s;
			transform-style: preserve-3d;

			div {
				box-shadow: 0 4px 40px rgba(#000000, 0.25);
				border-radius: 32px;
				overflow: hidden;
				position: absolute;
				padding: 16px;
				width: 100%;
				height: 100%;
				background: #fff;
				backface-visibility: hidden;
			}

			.front {
				img {
					position: absolute;
					border-radius: 500px;
					right: -15%;
					bottom: -35%;
					width: 100%;
					height: 100%;
                    object-fit: cover;
                    background-size: cover;
					background: antiquewhite;
				}
			}

			.back {
				transform: rotateY(180deg);
				position: relative;
				img {
					position: absolute;
					right: 0;
					bottom: 0;
					width: 120%;
					height: 120%;
					object-fit: contain;
					background-size: contain;
				}
				p {
					color: #fff;
					font-size: 0.8em;
					position: relative;
					z-index: 1;
					text-align: left;
				}
			}
		}
	}
</style>
