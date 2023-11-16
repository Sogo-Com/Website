<script>
	import { goto } from '$app/navigation';
	import { onMount } from "svelte";


    export let isLeft = 'true'
    export let imgLeft;
    export let imgRight;
    export let link;
    export let title;
    export let description

	isLeft = isLeft.toString()

	
    function clicked(){
        if(link != null && link.length > 0)
            goto(link)
    }
  
</script>


<div class="sub-project { isLeft == 'true' ? 'blanc' : 'bleu' } ">
    <div class="images  { isLeft == 'false' ? 'big' : '' }">
        <img src="{imgLeft}" alt="tomme" />
    </div>


    {#if isLeft == 'true'}
    <div class="trait" />
    {/if}

    <div class="contenu">
        <h3>{title}</h3>
        <div class="texte">
            {description}
        </div>
        <div  on:click={clicked} class="btn bleu">En savoir +</div>
    </div>

    {#if isLeft == 'false'}
    <div class="trait" />
    {/if}

    <div class="images  { isLeft == 'true' ? 'big' : '' }">
        <img src="{imgRight}" alt="tomme" />
    </div>
</div>


<style lang="scss" >

.sub-project {
			&.blanc {
				background-color: #fff;

				.contenu{
					@media only screen and (max-width: $phone) {
						align-items: start;
						text-align: start;
					}
				}
			}
			&.bleu {
				background-color: rgba($color-bleu, 0.1);

				.contenu{
					@media only screen and (max-width: $phone) {
						align-items: end;
						text-align: end;
					}
				}
			}
			padding: 64px 11%;
			height: fit-content;
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: space-evenly;
			align-items: center;
			@media only screen and (max-width: $phone) {
				flex-direction: column;
				padding:32px 12px ;
			}
			.contenu {
				max-width: 40vw;
				padding: 32px;

				@media only screen and (max-width: $phone) {
					max-width: unset;
					padding:  0px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
				h3 {
					position: relative;
					z-index: 1;
					width: fit-content;
					@media only screen and (max-width: $phone) {
						margin-bottom: 16px;
					}
				}
			

				h3:before {
					background-color: rgba($color-bleu,.1);
					display: block;
					position: absolute;
					left: -15%;
					z-index: -1;
    				bottom: 15%;
					border-radius: 50px;
					content: '';
					width: 50px;
					height: 50px;
					@media only screen and (max-width: $phone) {
						display: none;
					}
				}

				h3:after {
					background-color: rgba($color-bleu,.1);
					display: block;
					position: absolute;
					border-radius: 50px;
					top: 15%;
					left: 85%;
					content: '';
					z-index: -1;
					width: 50px;
					height: 50px;
					@media only screen and (max-width: $phone) {
						display: none;
					}
				}

				.texte {
					padding: 0 0 32px 0;
					font-family: $font-secondary-light;
					@media only screen and (max-width: $phone) {
						padding:0;
					}
				}
				.btn {
					@media only screen and (max-width: $phone) {
						margin-top: 16px;
					}
			
					background-color: $color-bleu;
				}
			}
			.trait {
				width: 2px;
				height: 300px;
				background-color: $color-gris-dark;
				margin: 0 32px;
				@media only screen and (max-width: $phone) {
					display: none;
				}
			}
			.images {
				flex-basis: 15%;
				
				@media only screen and (max-width: $phone) {
					display: none;
				}

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					background-size: cover;
				}

				&.big {
					flex-basis: 25%;
				}
			}
		}


</style>