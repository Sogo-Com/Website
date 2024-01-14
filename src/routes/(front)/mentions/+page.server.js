

const mentionsLegales = {
    $website$: 'https://www.sogocom.fr',
	$formJuridique$: 'SARL',
	$nomEntreprise$: 'SOGOCOM',
	$csEntreprise$: '4000,00',
	$tvaEntreprise$: 'FR57511682387',
	$adresseEntreprise$: '356 RTE DE CHAVANNE 74330 POISY',
	$cpEntreprise$: '74330',
	$villeEntreprise$: 'POISY',
    $nomWebmaster$ : "Vibert-vallet Guillian",
    $mailWebmaster$ : "vibert.vallet.guillian@gmail.com",
    $nomHebergeur$ : "OVH",
    $adresseHebergeur$ : "2 rue Kellermann 59100 Roubaix",
    $telHebergeur$ : "1007",
    $cpHebergeur$ : "59100",
    $villeHebergeur$ : "Roubaix",
    $representantCnil$ : "Vibert-vallet Guillian",
    $mailCnil$ : "vibert.vallet.guillian@gmail.com",
    $representantEntreprise$ : "Sophie GOMME - Arnaud TROGNEE",
    $donneesCnil$ : "Nom, prénom, adresse, téléphone, email",
    $autreDonneesCnil$ : "Cookies",
    $conservationCnil$ : "5 ans",
    $securiteRGPD$ : `Afin d’assurer la protection de votre sécurité, nous utilisons le protocole de sécurité de la couche transport pour transmettre des renseignements personnels dans notre système.
    Toutes les données stockées dans notre système sont bien sécurisées et ne sont accessibles qu’à nos employés. Nos employés sont liés par des accords de confidentialité stricts et une violation de cet accord entraînerait le licenciement de l'employé.`
    
};


export const load = async (serverloadEvent) => {
	return {
		mentionsLegales
	};
};



