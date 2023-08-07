<script>
import { t,locales, locale, } from '$lib/translations';
import {page} from '$app/stores'


</script>
<div id="navContainer">
   
    <div class="logo">
        <img alt="logo menu" src="/images/logo-menu.svg">
    </div>
    <div class="links">
        <div>
            {$t("common.menu-agence")}
        </div>
        <div>
            {$t("common.menu-competences")}
        </div>
        <div>
            {$t("common.menu-projets")}
        </div>
        <div>
            {$t("common.menu-actualites")}
        </div>
        <div>
            {$t("common.menu-contact")}
        </div>
    </div>
    <div class="presse">
        <div class="btn">

            {$t("common.menu-coin-presse")}
        </div>
    </div>
</div>



<style lang="scss">


    #navContainer{
        position: absolute;
        top: 0;
        background-color: #fff;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        padding: 16px;
        z-index: 100;

        div{
            flex-grow: 1;
            text-align: center;
            
            font-family: $font-secondary-light;
            color: $color-gris;
        }

        .links{
            flex-grow: 2;
        }

        .presse{
            .btn{
                
                background-color: $color-rose;
                width: fit-content;
                display: inline;
                padding: 10px 32px ;
                border-radius: 32px;
                color: $color-blanc;
            }
        }
    }



</style>