<script>
    import { t } from '$lib/translations';
    import { page } from '$app/stores'
    export let data;
    const { contacts }= data

</script>

<div class="grid-view">
    <h1>Liste des Demandes de Contacts</h1>
   
    <table class="contact-table">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Créé le</th>
            </tr>
        </thead>
        <tbody>
            {#each contacts as contact }
                <tr>
                    <td>{contact?.nom  ?? ''}</td>
                    <td>{contact?.prenom  ?? ''}</td>
                    <td>{contact?.email  ?? ''}</td>
                    <td>{contact?.telephone ?? ''}</td>
                    <td>{
                    new Intl.DateTimeFormat('fr-FR', {
                        dateStyle: 'full', timeStyle: 'long'
                    }).format(contact?.createdAt)}</td>
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
  }

  th {
    background-color: var(--color-jaune);
    color: var(--color-blanc);
    font-family: var(--font-secondary-bold);
  }

  td {
    font-family: var(--font-secondary-regular);
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