<script>
	import { goto } from '$app/navigation';
	import { onMount } from "svelte";


    export let isLeft = 'true'
    export let imgLeft;
    export let imgRight;
    export let link;
    export let title;
    export let description

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
			}
			&.bleu {
				background-color: rgba($color-bleu, 0.1);
			}
			padding: 64px 32px;
			height: fit-content;
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: space-evenly;
			align-items: center;
			.contenu {
				max-width: 40vw;
				padding: 32px;

				h3 {
					position: relative;
					z-index: 1;
					width: fit-content;
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
				}

				.texte {
					padding: 0 0 32px 0;
				}
				.btn {
					margin-top: 32px;
					background-color: $color-bleu;
				}
			}
			.trait {
				width: 2px;
				height: 250px;
				background-color: $color-gris-dark;
			}
			.images {
				flex-basis: 15%;
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