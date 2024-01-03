<script lang="ts">
  type Service = {
    name: string,
    description: string,
    amount: number
  }

  async function getServices() {
    const results = await fetch('https://olahbarbershop.codes/services')
    const services: Service[] = await results.json()
    return services
  }
</script>

<h1>Services</h1>

{#await getServices()}
  <p>Loading...</p>
{:then services}
  <h2>We provide the following services:</h2>
  <br>
  
  {#each services as { name, description, amount }}
    <ul>
      <li>
        <p><strong>{name}: </strong>
        {amount}Ft</p>
        <br>
        <p>{description}</p>
        <br>
      </li>
    </ul>
  {/each}
{:catch error}
  <p>{error.message}</p>
{/await}
