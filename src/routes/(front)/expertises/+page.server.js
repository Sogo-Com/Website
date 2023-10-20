
export const load = async (serverloadEvent) => {
	return {
		realisationData
	};
};






const realisationData = [
    {
        id: 'redaction',
        titre: 'Rédaction',
        class: 'yellow',
        descriptionHTML: `L’écriture pour signature, les mots qu’il faut et les textes au cordeau, tel est notre crédo.<br>
Parce qu’un contenu rédactionnel qui colle parfaitement à votre identité est un gage de notoriété et vous permet de vous démarquer, nous imaginons ensemble l’univers qui vous représentera.
<br><br>
→ Sites web<br>
→ Newsletters<br>
→ Publi-reportages<br>
→ Articles de blogs<br>
→ Actualités<br>
→ Communiqués et dossiers de presse…<br><br>

Vous avez le projet, nous avons les mots.`,
        imagePrincipale: '/images/expertise-redac.png',
        
        icons: [{
            active:'/images/expertises/Redaction/WebActive_1.svg',
            inactive : '/images/expertises/Redaction/Web_1.svg',
            titre: 'Web',
            description: `Ecrire pour le web est un exercice particulier qui a des règles propres. L’écriture SEO est le meilleur moyen de faire remonter vos contenus en termes de référencement. 
            <br><br>
            Des textes développés maillés de mots-clés, des descriptions soignées, des paragraphes hiérarchisés… Vous avez le sujet, nous avons les clés.`,
            image:'/images/expertise-yellow.png',
        },
        {
            active:'/images/expertises/Redaction/PrintActive_1.svg',
            inactive : '/images/expertises/Redaction/Print_1.svg',
            titre: 'Print',
            description: `Plaquettes, brochures, flyers, dossiers de presse… Vos supports de communication print doivent être dans le prolongement de votre identité et de vos valeurs. Des textes adaptés, des mots choisis et des univers déclinés, retrouvez ici quelques-uns de nos projets rédactionnels.`,
            image:'/images/expertise-yellow.png',
        }]
    },

    {
        id: 'presse',
        class: 'yellow',
        titre: 'Relations presse',
        descriptionHTML: `La relation au cœur de notre métier, l’expérience en plus, un fichier presse activé, les RP n’ont pour nous aucun secret ! Nous écrivons, mettons en forme et diffusons vos communiqués et dossiers de presse. 
<br><br>
Nous organisons vos conférences de presse et assurons le suivi de la relation avec les journalistes pour faciliter et dynamiser vos échanges.
<br><br>
→ Relations privilégiées<br>
→ Fichier qualifié<br>
→ Echanges de proximité<br>
→ Réactivité…<br><br>

Sont les flèches ciblées prêtes à être décochées.`,
        imagePrincipale: '/images/expertise-presse.png',
    

        icons: [{
            active:'/images/expertises/RelationsPresse/CommuniqueActive_2.svg',
            inactive : '/images/expertises/RelationsPresse/Communique_2.svg',
            titre: 'Communiqués de presse',
            description: `Le communiqué de presse est un outil précieux pour faire régulièrement parler de nos partenaires. A chacun ses besoins et son rythme, nous planifions avec vous l’envoi ponctuel ou régulier de vos informations et actualités.`,
            image:'/images/expertise-yellow.png',
        },{
            active:'/images/expertises/RelationsPresse/DossierActive_2.svg',
            inactive : '/images/expertises/RelationsPresse/Dossier_2.svg',
            titre: 'Dossier presse',
            description: `Le dossier de presse est essentiel pour développer l’intérêt autour de vos valeurs d’entreprise, de vos compétences et de vos actions. 
            Complet et détaillé, le dossier de presse doit être le reflet de votre identité.`,
            image:'/images/expertise-yellow.png',
        },{
            active:'/images/expertises/RelationsPresse/InvitationActive_2.svg',
            inactive : '/images/expertises/RelationsPresse/Invitation_2.svg',
            titre: 'Invitation presse',
            description: `Que ce soit pour lancer un événement, marquer le temps fort d’une entreprise, évoquer le lancement d’un produit ou simplement faire découvrir l’un de nos partenaires, nous organisons des rencontres avec la presse sous différentes formes, petits-déjeuners informels ou conférences officielles.`,
            image:'/images/expertise-yellow.png',
        }]
    },
    {
        id: 'graphisme',
        titre: 'Graphisme',
        class: 'pink',

        descriptionHTML: `Parce qu’une identité forte doit être celle qui vous colle à la peau et reflète vos valeurs, nous imaginons et créons les visuels qui vous accompagneront dans toutes vos actions.
<br><br>
→ Identité visuelle<br>
→ Charte graphique<br>
→ Création de logos<br>
→ Réalisation de supports print : flyers, plaquettes, magazines, dossiers de presse, papeterie…<br>
→ Elaboration de maquettes web : sites internet, blogs, bannières…<br><br>

Confiez-nous votre image, nous la bichonnerons. Notoriété et qualité garanties.`,
        imagePrincipale: '/images/expertise-graphisme.png',


        icons: [{
            active:'/images/expertises/Graphisme/LivreActive_1.svg',
            inactive : '/images/expertises/Graphisme/Livre_1.svg',
            titre: 'Livre',
            description: `La mise en page d’un livre entier est un travail titanesque et complexe. 
            Nous imaginons l’univers graphique qui sera le vôtre et assurons la réalisation de la maquette, de l’élaboration du chemin de fer jusqu’aux calages techniques avec l’imprimeur.`,
            image:'/images/expertise-purple.png',
        },
        {
            active:'/images/expertises/Graphisme/FlyerActive_1.svg',
            inactive : '/images/expertises/Graphisme/Flyer_1.svg',
            titre: 'Flyer',
            description: `Percutant, le flyer est un outil qui doit taper dans l’œil tout en assurant la lisibilité du propos et des informations essentielles. Son efficacité dépend de sa pertinence visuelle.`,
            image:'/images/expertise-purple.png',
        }, {
            active:'/images/expertises/Graphisme/PlaquetteActive_1.svg',
            inactive : '/images/expertises/Graphisme/Plaquette_1.svg',
            titre: 'Plaquette',
            description: `Qu’elle soit institutionnelle, commerciale ou informative, la plaquette doit refléter votre intention et être bien organisée. Un look qui correspond à votre chartre graphique est un gage de qualité.`,
            image:'/images/expertise-purple.png',
        },
        {
            active:'/images/expertises/Graphisme/LogoActive_1.svg',
            inactive : '/images/expertises/Graphisme/Logo_1.svg',
            titre: 'Logo',
            description: `Le logo est le symbole de votre entreprise. Il doit refléter votre identité et vos valeurs en un seul coup d’œil. Il doit être décliné en différents formats et coloris. Associé à une charte graphique, il véhicule votre image et vous accompagne durant toute la vie de votre entreprise.`,
            image:'/images/expertise-purple.png',
        },
        {
            active:'/images/expertises/Graphisme/PubliciteActive_1.svg',
            inactive : '/images/expertises/Graphisme/Publicite_1.svg',
            titre: 'Publicité',
            description: `Encarts publicitaires et publi-informations, nous réalisons vos maquettes selon les formats et contraintes techniques exigés par les magazines.`,
            image:'/images/expertise-purple.png',
        },{
            active:'/images/expertises/Graphisme/CoveringActive_1.svg',
            inactive : '/images/expertises/Graphisme/Covering_1.svg',
            titre: 'Covering',
            description: `Le covering, qui consiste à habiller vos véhicules à votre image, a des contraintes techniques bien particulières. Pour des covering élégants et bien calés, faites confiance à notre œil avisé et roulez avec style.`,
            image:'/images/expertise-purple.png',
        },
        ]
    },
    {
        id: 'reseaux',
        titre: 'Réseaux Sociaux',
        class: 'blue',

        descriptionHTML: `Stratégie, notoriété, présence, comment activer ses réseaux sociaux et se démarquer ? Autant de questions auxquelles nous répondons. Facebook, Instagram, Linkedin, Twitter, Tik Tok… A chaque réseau sa stratégie et son contenu spécifique. Nous vous orientons et animons pour vous la toile en fonction de vos objectifs.
<br><br>
→ Création de contenu rédactionnel et visuel<br>
→ Planification des actions<br>
→ Stratégie social media<br>
→ Community Management<br>
<br>
Laissez-nous vous guider pour optimiser vos actions sur les médias sociaux et accroitre votre e-réputation.`,
        imagePrincipale: '/images/expertise-reseaux.png',
      

        icons: [
            {
                active:'/images/expertises/ReseauxSociaux/FacebookActive_1.svg',
                inactive : '/images/expertises/ReseauxSociaux/Facebook_1.svg',
                titre: 'Facebook',
                description: `Photos, vidéos, partages de lien et questions interactives sont les contenus les mieux véhiculés sur Facebook, à nous de trouver le bon rythme et les meilleurs accroches pour valoriser votre entreprise.
                C’est la synergie entre visuel, propos, choix des hashtags et interactions qui vous garantira efficacité et pertinence.`,
                image:'/images/expertise-blue.png',
            },
            {
                active:'/images/expertises/ReseauxSociaux/InstagramActive_1.svg',
                inactive : '/images/expertises/ReseauxSociaux/Instagram_2.svg',
                titre: 'Instagram',
                description: `Réseau essentiellement basé sur le partage de photos et de vidéos, Instagram focalise son attraction sur l’engagement de ceux qui vous suivent et la possibilité qu’ils ont de s’identifier à vous. Créer du partage et de l’intimité et afficher ses sources d’inspiration font partie des ingrédients clés pour susciter l’intérêt.  Sur Insta, il faut être positif et divertissant !`,
                image:'/images/expertise-blue.png',
            },
            {
                active:'/images/expertises/ReseauxSociaux/LinkedinActive_1.svg',
                inactive : '/images/expertises/ReseauxSociaux/Linkedin_2.svg',
                titre: 'LinkedIn',
                description: `Linkedin est un réseau social à visée professionnelle. Ici les contenus peuvent être plus détaillés et plus techniques pour attirer l’intérêt et l’engagement à vos côtés de partenaires, d’institutionnels et de tout un écosystème de professionnels. Parlez des évolutions et innovations de votre entreprise, mettez vos collaborations et projets à l’honneur, développez des sujets engagés et surtout exprimez-vous… Sur Linkedin, c’est la régularité qui prime.`,
                image:'/images/expertise-blue.png',
            },]
    },
    {
        id: 'photos',
        titre: 'Photos et vidéos',
        class: 'kaki',

        descriptionHTML: `Parce que les images en disent long, nous les pensons en amont. En contre-plongée ou dans les airs, en fixe ou en mouvement, photos et vidéos accompagnent les mots.
<br><br>
→ Photos<br>
→ Prises de vue aériennes avec drone<br>
→ Vidéos : teasers, interviews, témoignages, reportages…<br>
<br>
Zoom sur l’image, le tournage et le montage sont aussi dans notre rayon. Action.`,
        imagePrincipale: '/images/expertise-photos.png',
     
        icons: [ {
            active:'/images/expertises/PhotosVideos/PhotosActive_1.svg',
            inactive : '/images/expertises/PhotosVideos/Photos_1.svg',
            titre: 'Photos',
            description: `Que ce soit pour le web ou pour le print, avoir des photos haute définition, bien anglées, mises en scène et variées est un pré-requis incontournable à toute communication qualitative. 

            Votre image en dépend et la confiance que l’on vous accordera aussi. Misez sur l’image n’est pas une option, faites-nous confiance.`,
            image:'/images/expertise-kaki.png',
        },{
            active:'/images/expertises/PhotosVideos/VideosActive_1.svg',
            inactive : '/images/expertises/PhotosVideos/Videos_1.svg',
            titre: 'Vidéos',
            description: `Tout comme la photo, la vidéo permet de capitaliser de façon positive et instantanée sur votre entreprise. Elaborer le scénario, réaliser les prises de vue et les interviews, cadencer le tout en musique et en rythme, la vidéo est un art qui doit donner du sens à votre message.`,
            image:'/images/expertise-kaki.png',
        },{
            active:'/images/expertises/PhotosVideos/DroneActive_1.svg',
            inactive : '/images/expertises/PhotosVideos/Drone_1.svg',
            titre: 'Prises de vue aériennes',
            description: `Les prises de vue aérienne à l’aide de drones apportent une vraie plus-value à vos images. Prendre de la hauteur et changer d’angle pour des images qui marquent, plonger au cœur d’un univers vu d’en haut pour en prendre toute la dimension, les images de drone ouvrent le champ d’un regard impactant.`,
            image:'/images/expertise-kaki.png',
        }]
    },

    {
        id: 'evenement',
        titre: 'Événement B to B',
        class: 'red',

        descriptionHTML: `Organiser un événement professionnel c’est savoir compiler une multitude de paramètres pour créer la synergie parfaite. Confiez-nous vos envies, nous trouverons le lieu idéal et le concept qui marquera les esprits.
<br><br>
→ Evénements d’entreprises<br>
→ Petits-déjeuners thématiques<br>
→ Rencontres dégustation<br>
→ Conférences de presse…<br>
<br>
N’hésitez pas à nous confier vos projets, nous imaginons tous vos événements à la demande.`,
        imagePrincipale: '/images/expertise-evenement.png',
      
        icons: [
            {
                active:'/images/expertises/Event/ConventionActive_1.svg',
                inactive : '/images/expertises/Event/Convention_1.svg',
                titre: 'Convention',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 
                Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus. 
                `,
                image:'/images/expertise-red.png',
            },
            {
                active:'/images/expertises/Event/InaugurationActive_1.svg',
                inactive : '/images/expertises/Event/Inauguration_1.svg',
                titre: 'Inauguration',
                description: `Inaugurer ses nouveaux locaux est toujours l’occasion de tisser du lien avec ses partenaires et collaborateurs et de conforter le lien de proximité que vous entretenez avec eux. C’est aussi une façon de s’implanter dans un nouvel environnement et de rencontrer ses voisins. Ne négliger pas cette étape importante dans la vie de votre entreprise.
                `,
                image:'/images/expertise-red.png',
            },
            {
                active:'/images/expertises/Event/SeminaireActive_1.svg',
                inactive : '/images/expertises/Event/Seminaire_1.svg',
                titre: 'Séminaire',
                description: `Vous souhaitez organiser un temps d’échange et de travail autour d’un thème, d’un sujet ou d’une problématique ? Un séminaire réussi doit concilier proximité des espaces de réunion, de restauration et d’hébergement, fluidité du planning et bien entendu pertinence des interventions. Nous savons mitonner pour vous la recette parfaite.`,
                image:'/images/expertise-red.png',
            }, {
                active:'/images/expertises/Event/SoireeActive_1.svg',
                inactive : '/images/expertises/Event/Soiree_1.svg',
                titre: 'Soirées',
                description: `Soirées à thème, esprit guinguette, tendance festive ou gustative, nous avons le secret pour faire de nos/vos soirées de vrais moments d’échanges informels. Se rassembler autour d’une dégustation en accord mets et vins, découvrir le savoir-faire d’un partenaire ou le talent caché d’une pépite de l’équipe, tous les prétextes sont bons pour se retrouver et casser un peu les habitudes.`,
                image:'/images/expertise-red.png',
            },
        ]
    }
];


