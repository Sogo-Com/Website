
<script>

    import { t } from '$lib/translations';

</script>

<div id="top">
    <img alt="background-sogo" src="/images/bg-home.png">
    <div class="abso bg-gris"></div>
    
    <h1 class="abso">{$t('home.titre')}</h1>

</div>
<div id="blanc">

    <div class="wrapper">



    <div class="bloc desc-gauche">
        <h2>
            <span class="grey">{$t('home.intro-1')}</span><br>
            <span class="pink">{$t('home.intro-2')}</span>
           
        </h2>
        <p>
            {$t('home.description')}
        </p>
        <div class="btn">
            {$t('common.savoir+')}
        </div>
    </div>
    <div class="bloc img-droite">
        <div class="conteneur">
            <span class="bubble top-left">

            </span>
            <img src="/images/home-equipe.png" alt="L'equipe">
            <span  class="bubble bottom-right">
                
            </span>
        </div>
    </div>
</div>
</div>


<style lang="scss">

#top{

    height: 100vh;
    width: 100%;
    overflow: hidden;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 10;
        background-size: cover;
        object-fit: cover;
    }
    .abso{
        position: absolute;
        left: 50%;
     
    }
    h1{
           
            bottom:0;
            transform: translateX(-50%);
            color:white;
            font-family: $font-primary-bold ;
            font-size: 3rem;
            text-align: center;
            padding: 32px;
            z-index: 30;
        }
    .bg-gris{
       
        height: 600px;
        width:700px;
        border-top-left-radius:400px ;
        border-top-right-radius:400px ;
        transform: translateX(-50%) scale(1.5);
        opacity: 0.5;
        bottom: -40%;
        z-index: 20;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        background-color: #575757;
        

    }

}

#blanc{


    padding: 6rem 0;
    position: relative;
    overflow: hidden;

    .wrapper{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        position: relative;
        
        left: 9%;

    
    .bloc{
        width: 50%;
        padding: 32px;


        h2{

            font-family: $font-primary-bold;
            font-size: 2.5rem;
            margin-bottom: 32px;
            .grey{
                color: $color-gris-dark;
            }

            .pink{
                color: $color-rose;
            }
        }

        p{
            font-family: $font-secondary-light;
            margin-bottom: 48px;
        }

        .btn{
            border-radius: 32px;
            font-family: $font-primary-semibold;
            background-color: $color-rose;
            padding: 10px 20px;
            display: inline;
            color: #fff;
        }

        
    }
    .img-droite{
    
        display: flex;
        justify-content: center;
        align-items: center;

        .conteneur{
            position: relative;
            width:70%;
            span{
                position: absolute;
                width: 100px;
                height: 100px;
                border-radius: 50px;
                background-color:$color-rose;

                &.top-left{
                    transform: translate(-50%,-50%);
                    z-index: 5;
                }

                &.bottom-right{
                    top: 100%;
                    left: 100%;
                    transform: translate(-50%,-50%);
                    z-index: 15;
                }
            }
            img{
                position: relative;
                z-index: 10;
                width: 100%;
                height: 100%;
            }
        }
     
    }
}

}

</style>