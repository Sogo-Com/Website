<script>
	import { onMount } from 'svelte';
	import { t } from '$lib/translations';
	import Swiper from 'swiper';
	import { Pagination } from 'swiper/modules';
	import 'swiper/css';


    let name;
    let type;
    let description;

    const gomettes = [
        {
            id: 1,
            name: "Sophie",
            type: "La gommette des gommettes",
            description: "qdsqsddqsLa gommette des gommettes",
            image: "/images/agence-bg.png"
        },
        {
            id: 2,
            name: "Arnaud",
            type: "La gommette des video montages",
            description: "La gommesqdqsqdstte des gommettes",
            image: "/images/agence-bg.png"
        },
        {
            id: 3,
            name: "Lea",
            type: "La gommette des goblins",
            description: "La gommette des gofzfefzemmettes",
            image: "/images/agence-bg.png"
        },
        {
            id: 4,
            name: "Sophie",
            type: "La gommette des gommettes",
            description: "La gommette desfeffe gommettes",
            image: "/images/agence-bg.png"
        },
        {
            id: 5,
            name: "Sophie",
            type: "La gommette des gommettes",
            description: "La gommette des azazazgommettes",
            image: "/images/agence-bg.png"
        },
        {
            id: 6,
            name: "Sophie",
            type: "La gommette des gommettes",
            description: "La gommette dzaazzaes gommettes",
            image: "/images/agence-bg.png"
        },
        {
            id: 7,
            name: "Sophie",
            type: "La gommette des gommettes",
            description: "La gozazazmmette des gommettes",
            image: "/images/agence-bg.png"
        },
    ]

	onMount((_) => {
		let swiper = new Swiper('.swiper-container', {
			modules: [Pagination],
			
			slidesPerView: 1,
			slidesPerGroup: 1,
		
		});

        swiper.on("activeIndexChange", ()=>{
            name.innerHTML = gomettes[swiper.activeIndex].name;
            type.innerHTML = gomettes[swiper.activeIndex].type;
            description.innerHTML = gomettes[swiper.activeIndex].description;
        })
	});
</script>

<div class="gomettes">

    <div class="h2-seo center">
		<h2><span class="pink">Les Gommettes</span></h2>
		<p>Phrase très courte avec les mots clé pour SEO</p>
	</div>

	<div class="swiper-gomette">
		<div class="swiper-container">
			<div class="swiper-wrapper">
                {#each gomettes as gomette, index}
                    <div class="swiper-slide">
                        <img src="{gomette.image}" alt="{gomette.name}" />
                    </div>
                {/each}
				
			</div>
		</div>
	</div>

    <div class="info">
        <div class="gomette-info">

            <h2>
                <span class="pink" bind:this={name}>SOPHIE</span>
                
            </h2>
            <h3 bind:this={type}>
                La gommette des Gommettes
            </h3>
            <p bind:this={description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 
                Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 
    
                Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum.
            </p>
    
        </div>
    </div>
 
</div>

<style lang="scss" global>
	.gomettes {


        .info{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 64px;

            .gomette-info{
                width: 60%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                h2{
                    margin-bottom: 8px;
                }
                h3{
                    font-family: $font-secondary-light;
                    font-size: 1rem;
                }
                p{
                    font-size: .8rem;
                }
            }
        }


        .h2-seo{
            padding: 64px;
            h2{
                font-size: 4rem;
            }
        }

		.swiper-gomette {
			display: flex;
			justify-content: center;
			align-items: center;
			.swiper-container {
				width: 20vw;
				height: 20vw;
                overflow: visible;
              

				.swiper-wrapper {
					.swiper-slide {
                        
                        &.swiper-slide-active{
                            transform: scale(1.5);
                        }
                        padding: 32px;
						width: 100% !important;
						height: 100%;
                        transition: all .3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
						img {
                            -webkit-mask-image: url("/images/bubble-mask.svg");
                            mask-image: url("/images/bubble-mask.svg");
                            -webkit-mask-size: contain;
                            mask-size: contain;
                            -webkit-mask-repeat: no-repeat;
                            mask-repeat: no-repeat;
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}
				}
			}
		}
	}
</style>
