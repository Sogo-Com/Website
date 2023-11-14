<script>

    import { page } from '$app/stores'
    import {goto} from '$app/navigation'
    export let data;
    const { contact }= data

  async function deleteContact(){
    await fetch(`/api/contact`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: contact.id})
    })
    goto("/admin/contacts")
  }


</script>
<div class="sticky-bar">
  <button class="delete-button" on:click={deleteContact}>Supprimer</button>
</div>

<div class="contact-details">
  <h1>Detail de la Demande de Contact</h1>
  <div class="details">
      <ul>
          <li><strong>Nom:</strong> {contact.nom}<li>
          <li><strong>Prénom:</strong> {contact?.prenom ?? 'Aucun prénom'}</li>
          <li><strong>Email:</strong> <a href="mailto:{contact?.email ?? ''}"> {contact?.email ?? 'Aucun email'}</a></li>
          <li><strong>Téléphone:</strong> <a href="tel:{contact?.telephone ?? ''}">{contact?.telephone ?? ''}</a></li>
          <li><strong>Société:</strong>{contact?.societe ?? 'Aucune société'}</li>
          <li><strong>Créé le:</strong> {new Intl.DateTimeFormat('fr-FR', {
            dateStyle: 'full', timeStyle: 'long'
        }).format(contact?.createdAt)}</li>
      </ul>
  </div>
</div>
<style lang="scss">

.sticky-bar {
  position: sticky;
  top: 0;
  background-color: var(--color-jaune);
  padding: 10px 0;
  text-align: right;
  z-index: 1;
  
  .delete-button {
    background-color: var(--color-rose);
    color: var(--color-blanc);
    padding: 10px 20px;
    font-family: var(--font-secondary-bold);
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: var(--color-bordeaux);
    }
  }
}

  .contact-details {
  max-width: var(--tablet);
  margin: 0 auto;
  padding: 20px;
  text-align: center;

  h1 {
    font-family: var(--font-primary-bold);
    color: var(--color-rose);
  }

  .details {
    ul {
      list-style: none;
      padding: 0;

      li {
        font-family: var(--font-secondary-regular);
        color: var(--color-gris-dark);
        font-size: 18px;
        margin-bottom: 10px;

        strong {
          font-weight: bold;
        }

        /* Style des liens */
        a {
          color: var(--color-bleu);
          text-decoration: none;
          transition: color 0.3s ease;

          &:hover {
            color: var(--color-kaki);
          }
        }
      }
    }
  }
}
</style>