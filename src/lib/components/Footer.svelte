<script>
    import { t,locales, locale, } from '$lib/translations';
    import {page} from '$app/stores'
    
    
    </script>
  
<footer>
    <div class="black">

        <a class="logo" href="/">
            <img alt="logo menu" src="/images/logo-menu-black.svg" />
        </a>
        <div  class="links">
            <a href="/agence">
                {$t('common.menu-agence')}
            </a>
            <a href="/actualites">
                {$t('common.menu-actualites')}
            </a>
            <a href="/projets">
                {$t('common.menu-projets')}
            </a>
            <a href="/contact">
                {$t('common.menu-contact')}
            </a>
            <a href="/presse">
                {$t('common.menu-presse')}
            </a>
            <a href="/competences">
                {$t('common.menu-competences')}
            </a>
        </div>
    </div>
    <div class="white">
        

        <a href="/mentions">
            {$t('common.menu-mentions')}
        </a>
        -
        <a href="/donnees-personelles">
            {$t('common.menu-donnees')}
        </a>
        -
        <a>
            {$t('common.menu-cookies')}
        </a>
    </div>
	
</footer>


    <style lang="scss">
    
        footer{
            .black{
                background-color: $color-gris-dark;
                display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 32px;
                .logo{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-basis: 33.3%;
                    img{
                       
                        width: 80%;
                        height: 50%;
                    }
                }
                .links{
                    flex-basis: 33.3%;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;

                    a{
                        flex-basis: 50%;
                        font-family: $font-secondary-light;
                        font-size: .8rem;
                        color: $color-blanc;
                        text-decoration: none;
                        padding-bottom: 16px;
                    }
                }
            }
            .white{
                background-color: $color-blanc;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: $font-secondary-light;
                        font-size: .8rem;
                        color: $color-gris-dark;
                a{
                    padding: 8px 16px;
                    color: $color-gris-dark;
                    text-decoration: none;
                      
                }

            }
        }
    
    
    </style>