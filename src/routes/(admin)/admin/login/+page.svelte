<script>
    import { t } from '$lib/translations';

    export let form;
</script>


<div class="login-container">
  <h1>Login</h1>
  <form action="?/login" method="POST">
      <div class="form-group">
          <label for="email">Email</label>
          <input id="email" name="email" type="text" required />
      </div>

      <div class="form-group">
          <label for="password">Password</label>
          <input id="password" name="password" type="password" required />
      </div>

      {#if form?.invalid}
          <p class="error">Email and password are required.</p>
      {/if}

      {#if form?.credentials}
          <p class="error">You have entered the wrong credentials.</p>
      {/if}

      <button type="submit">Log in</button>
  </form>
</div>

<style lang="scss">
h1{
  color: var(--color-gris-dark);

}
.login-container{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
form {
  padding: 0 32px;
  margin-top: 20px;
  width: auto;
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;

  label {
    display: block;
    font-family: var(--font-secondary-medium);
    color: var(--color-gris-dark);
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--color-gris-clair);
    font-family: var(--font-secondary-regular);
  }

 
}
.error {
    color: red;
    font-family: var(--font-secondary-regular);
  }
button[type="submit"] {
  background-color: var(--color-jaune);
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
</style>