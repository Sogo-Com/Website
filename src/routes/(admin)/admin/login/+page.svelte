<script>
    import { t } from '$lib/translations';

    export let form;
</script>
Login


<h1>Login</h1>

<form action="?/login" method="POST">
  <div>
    <label for="email">email</label>
    <input id="email" name="email" type="text" required />
  </div>

  <div>
    <label for="password">Password</label>
    <input id="password" name="password" type="password" required />
  </div>

  {#if form?.invalid}
    <p class="error">email and password is required.</p>
  {/if}

  {#if form?.credentials}
    <p class="error">You have entered the wrong credentials.</p>
  {/if}

  <button type="submit">Log in</button>
</form>