<script lang="ts">
  import { onMount } from "svelte"

  type Service = {
    name: string,
    description: string,
    amount: number
  }
  
  let services: Service[]
  let error

  onMount(async () => {
    try {
      const results = await fetch('https://olahbarbershop.codes/services')
      if (!results.ok) {
        throw new Error('Network respone was not ok');
      }
      services = await results.json()
    } catch (err) {
      error = err
    }
  })

  /*async function getServices() {
    const results = await fetch('https://olahbarbershop.codes/services')
    const services: Service[] = await results.json()
    return services
  }*/
</script>

{#if services}
  <ul>
    {#each services as { name, description, amount }}
      <li>
        <p><strong>{name}: </strong>
        {amount}Ft</p>
        <br>
        <p>{description}</p>
        <br>
      </li>
    {/each}
  </ul>
{:else if error}
  <p>{error.message}</p>
{:else}
  <p>Loading...</p>
{/if}
