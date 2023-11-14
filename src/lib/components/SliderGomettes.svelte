<script>
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Pagination } from 'swiper/modules';
	import 'swiper/css';


    let name;
    let type;
    let description;

    const gomettes = [
        {
            id: 0,
            name: "Muriel",
            type: "La gommette des gommettes",
            description: "La gommette des gommettes",
            inactive: "/images/Muriel1.png",
            active: "/images/Muriel2.png"
        
        },
        {
            id: 1,
            name: "Gaelle",
            type: "La gommette des videos montages",
            description: "La gommette des gommettes",
            inactive: "/images/Gaelle1.png",
            active: "/images/Gaelle2.png"
        },
        {
            id: 2,
            name: "Julie",
            type: "La gommette des goblins",
            description: "La gommette des gommettes",
            inactive: "/images/Julie1.png",
            active: "/images/Julie2.png"
        },
        {
            id: 3,
            name: "Sophie",
            type: "La gommette des gommettes",
            description: "La gommette des gommettes",
            inactive: "/images/Sophie1.png",
            active: "/images/Sophie2.png"
        },
        {
            id: 4,
            name: "Arnaud",
            type: "La gommette des gommettes",
            description: "La gommette des gommettes",
            inactive: "/images/Arnaud1.png",
            active: "/images/Arnaud2.png"
        },
        {
            id: 5,
            name: "Veronique",
            type: "La gommette des gommettes",
            description: "La gommette des gommettes",
            inactive: "/images/Veronique1.png",
            active: "/images/Veronique2.png"
        },
        {
            id: 6,
            name: "Magali",
            type: "La gommette des gommettes",
            description: "La gommette des gommettes",
            inactive: "/images/Magali1.png",
            active: "/images/Magali2.png"
        },
    ]

	onMount((_) => {

		let swiper = new Swiper('.swiper-container', {
			modules: [Pagination],
            slidesPerGroup:1,
            loop:true,
            spaceBetween:0,
            slidesPerView:1,
            initialSlide:3,
            centeredSlides:true,
            slideToClickedSlide:true,
            breakpoints: {
              
                960: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                1150: {
                    slidesPerView: 3,
                    spaceBetween: 60
                }
            }
		
		});

      
        function ChangeIndex(){


            swiper.slides.forEach((slid,index) => {

                const id = slid.dataset.gomette
                slid.firstElementChild.src =  gomettes[id].inactive

            })
            
            const slid = swiper.slides[swiper.activeIndex]
            const id = slid.dataset.gomette

            name.innerHTML = gomettes[id].name;
            type.innerHTML = gomettes[id].type;
            description.innerHTML = gomettes[id].description;
          
            if(slid != null)
                slid.firstElementChild.src =  gomettes[id].active

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
                    <div class="swiper-slide" data-gomette="{gomette.id}">
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

        .info{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 64px;

            @media only screen and (max-width:$phone) {
                padding:32px 8px;
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
            @media only screen and (max-width:$phone) {
                padding: 32px;
                margin: 0;
        		}
            h2{

                @media only screen and (max-width:$phone) {
                    font-size: 2.5rem;
        		}

                font-size: 4rem;
            }
        }

		.swiper-gomette {
            width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			.swiper-container {
				width: 100%;
                height: 40vh;
                overflow: visible;


				.swiper-wrapper {
					.swiper-slide {
                        cursor: pointer;
                        transition: all .3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
                        padding: 64px;

                        @media only screen and (max-width:$phone) {
                        font-size: 2.5rem;
                    }


						img {
                      
							width: 100%;
							height: 100%;
							object-fit: contain;
						}
					}
				}
			}
		}
	}
</style>
