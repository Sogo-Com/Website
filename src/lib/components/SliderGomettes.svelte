

<script>
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Pagination } from 'swiper/modules';
	import 'swiper/css';

    export let collaborateurs;


    let prenom;
    let descriptionCourte;
    let description;


    collaborateurs?.sort((a,b)=> a.rang - b.rang).forEach((collaborateur, index) => {
        collaborateur.partialId = index
    })
    
	onMount((_) => {


        if(collaborateurs == null || collaborateurs.length == 0)
            return

		let swiper = new Swiper('.swiper-container', {
			modules: [Pagination],
            slidesPerGroup:1,
            loop:true,
            spaceBetween:0,
            slidesPerView:1,
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

                
                const id = slid.dataset.collaborateur
                slid.firstElementChild.src =  collaborateurs[id].photoInactive

            })
            
            const slid = swiper.slides[swiper.activeIndex]
            const id = slid.dataset.collaborateur

            prenom.innerHTML = collaborateurs[id].prenom;
            descriptionCourte.innerHTML = collaborateurs[id].descriptionCourte;
            description.innerHTML = collaborateurs[id].description;
          
            if(slid != null)
                slid.firstElementChild.src =  collaborateurs[id].photoActive

        }

        swiper.on("activeIndexChange", ()=>{

            ChangeIndex()
        })

        ChangeIndex()
	});


</script>

{#if collaborateurs != null && collaborateurs.length != 0}

<div class="collaborateurs">

    <div class="h2-seo center">
		<h2 animate><span class="pink">Les Gommettes</span></h2>
		<p>Phrase très courte avec les mots clé pour SEO</p>
	</div>

	<div class="swiper-collaborateur">
		<div class="swiper-container">
			<div class="swiper-wrapper">
                {#each collaborateurs as collaborateur, index}
                    <div class="swiper-slide" data-collaborateur="{collaborateur.partialId}">
                        <img src="{collaborateur.photoInactive}" alt="{collaborateur.prenom}" />
                    </div>
                {/each}
				
			</div>
		</div>
	</div>

    <div class="info">
        <div class="collaborateur-info">

            <h2 animate>
                <span class="pink" bind:this={prenom}></span>
            </h2>
            <h3 animate bind:this={descriptionCourte}>
            </h3>
            <p animate bind:this={description}>
            </p>
    
        </div>
    </div>
 
</div>

{/if}

<style lang="scss" >
	.collaborateurs {

        .info{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 64px;

            @media only screen and (max-width:$phone) {
                padding:32px 8px;
        		}
            .collaborateur-info{
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

		.swiper-collaborateur {
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

                            -webkit-mask-image: url("/images/bubble-mask.svg");
                            mask-image: url("/images/bubble-mask.svg");
                            -webkit-mask-size: contain;
                            mask-size: contain;
                            -webkit-mask-repeat: no-repeat;
                            mask-repeat: no-repeat;
						}
					}
				}
			}
		}
	}
</style>
