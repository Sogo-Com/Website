<script>
    import { t } from '$lib/translations';
    import { page } from '$app/stores'
    import { invalidateAll,invalidate, goto} from '$app/navigation';

    export let data;
    let {  contacts }= data

  async function deleteContact(index){
    const response = await fetch(`/api/contact`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: contacts[index].id})
    })
    
    const result = await response.json();
    if (result.success) {
      contacts.splice(index,1)
      contacts = contacts
      alert("Contact supprimé")
		}

  }
</script>

<div class="grid-view">
    <h1>{contacts.length == 0 ? 'Aucune demande de contact' : 'Liste des demandes de contacts'}</h1>
   
    <table class="contact-table" style="{contacts.length == 0 ? 'display:none;':''}">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <!-- <th>Email</th>
                <th>Téléphone</th> -->
                <!-- <th>Créé le</th> -->
                <th>Supprimer</th>
            </tr>
        </thead>
        <tbody>
            {#each contacts as contact,index }
                <tr>
                    <td><a href="/admin/contacts/{contact.id}">{contact?.nom  ?? ''}</a></td>
                    <td>{contact?.prenom  ?? ''}</td>
                    <!-- <td>{contact?.email  ?? ''}</td>
                    <td>{contact?.telephone ?? ''}</td> -->
                    <!-- <td>{
                    new Intl.DateTimeFormat('fr-FR', {
                        dateStyle: 'full', timeStyle: 'long'
                    }).format(contact?.createdAt)}</td> -->
                    <td><button data-sveltekit-reload class="delete-button" on:click={()=>{deleteContact(index)}}>Supprimer</button></td>
                </tr>
            {/each}
           
            <!-- Ajoutez d'autres lignes pour chaque demande de contact -->
        </tbody>
    </table>
</div>
<style lang="scss">
.contact-table {
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid var(--color-gris-clair);
    padding: 10px;
    text-align: left;
    a{
      color: #000;
      &:hover{
        color: var(--color-rose);
      }
    }
  }

  th {
    background-color: var(--color-jaune);
    color: var(--color-blanc);
    font-family: var(--font-secondary-bold);
  }

  td {
    font-family: var(--font-secondary-regular);
  }

  .delete-button {
  background-color: var(--color-rose); /* Couleur de fond */
  color: var(--color-blanc); /* Couleur du texte */
  padding: 10px 20px; /* Espacement interne */
  font-family: var(--font-secondary-bold); /* Police */
  border: none; /* Supprime la bordure */
  cursor: pointer; /* Curseur au survol */
  width: 100%;
  transition: background-color 0.3s ease; /* Transition au survol */
  &:hover {
    background-color: var(--color-bordeaux); /* Couleur de fond au survol */
  }
  }
 
  tbody tr:nth-child(even) {
    background-color: var(--color-gris-clair);
  }
}

.grid-view {
  max-width: var(--tablet);
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  overflow: auto;
    max-height: 90vh;
  
  h1 {
    font-family: var(--font-primary-bold);
    color: var(--color-rose);
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Trois colonnes par ligne, ajustez selon vos besoins */
    gap: 20px; /* Espacement entre les éléments */
  }
  
  .grid-item {
    background-color: var(--color-blanc);
    border: 1px solid var(--color-gris-clair);
    padding: 20px;
    
    /* Styles spécifiques pour le contenu de la demande de contact */
    
    /* Exemple de style pour le titre de la demande */
    .request-title {
      font-family: var(--font-secondary-medium);
      color: var(--color-bleu);
      font-size: 18px;
      margin-bottom: 10px;
    }
    
    /* Exemple de style pour les détails de la demande */
    .request-details {
      font-family: var(--font-secondary-regular);
      color: var(--color-gris-dark);
    }

    
  }
}

</style>