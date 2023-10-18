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
            name: "Muriel",
            type: "La gommette des gommettes",
            description: "La gommette des gommettes",
            inactive: "/images/Muriel1.png",
            active: "/images/Muriel2.png"
        
        },
        {
            id: 2,
            name: "Gaelle",
            type: "La gommette des videos montages",
            description: "La gommette des gommettes",
            inactive: "/images/Gaelle1.png",
            active: "/images/Gaelle2.png"
        },
        {
            id: 3,
            name: "Julie",
            type: "La gommette des goblins",
            description: "La gommette des gommettes",
            inactive: "/images/Julie1.png",
            active: "/images/Julie2.png"
        },
        {
            id: 4,
            name: "Sophie",
            type: "La gommette des gommettes",
            description: "La gommette des gommettes",
            inactive: "/images/Sophie1.png",
            active: "/images/Sophie2.png"
        },
        {
            id: 5,
            name: "Arnaud",
            type: "La gommette des gommettes",
            description: "La gommette des gommettes",
            inactive: "/images/Arnaud1.png",
            active: "/images/Arnaud2.png"
        },
        {
            id: 6,
            name: "Veronique",
            type: "La gommette des gommettes",
            description: "La gommette des gommettes",
            inactive: "/images/Veronique1.png",
            active: "/images/Veronique2.png"
        },
        {
            id: 7,
            name: "Magali",
            type: "La gommette des gommettes",
            description: "La gommette des gommettes",
            inactive: "/images/Magali1.png",
            active: "/images/Magali2.png"
        },
    ]

	onMount((_) => {

        const initialSlide = 3

		let swiper = new Swiper('.swiper-container', {
			modules: [Pagination],
			loop:false,
			slidesPerView: 1,
			slidesPerGroup: 1,
            initialSlide,
            slideToClickedSlide:true
		
		});

      
        function ChangeIndex(){

            name.innerHTML = gomettes[swiper.activeIndex].name;
            type.innerHTML = gomettes[swiper.activeIndex].type;
            description.innerHTML = gomettes[swiper.activeIndex].description;
            const oldSlide = swiper.slides[swiper.previousIndex]
            if(oldSlide != null)
                oldSlide.firstElementChild.src =  gomettes[swiper.previousIndex].inactive

            const newSlide = swiper.slides[swiper.activeIndex]
            if(newSlide != null)
            newSlide.firstElementChild.src =  gomettes[swiper.activeIndex].active

        }

        swiper.on("activeIndexChange", ()=>{

            ChangeIndex()
        })

        ChangeIndex()

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
                        <img src="{gomette.inactive}" alt="{gomette.name}" />
                    </div>
                {/each}
				
			</div>
		</div>
	</div>

    <div class="info">
        <div class="gomette-info">

            <h2>
                <span class="pink" bind:this={name}></span>
            </h2>
            <h3 bind:this={type}>
            </h3>
            <p bind:this={description}>
            </p>
    
        </div>
    </div>
 
</div>

<style lang="scss" >
	.gomettes {

        overflow: hidden;

        .info{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 64px;

            @media only screen and (max-width:$phone) {
                padding:64px 8px;
        		}
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

                @media only screen and (max-width:$phone) {
                    font-size: 2.5rem;
        		}

                font-size: 4rem;
            }
        }

		.swiper-gomette {
			display: flex;
			justify-content: center;
			align-items: center;
			.swiper-container {
				width: 15vw ;
				height: 15vw ;
                overflow: visible;
              

				.swiper-wrapper {
					.swiper-slide {
                        
                        
                        padding: 64px;
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
