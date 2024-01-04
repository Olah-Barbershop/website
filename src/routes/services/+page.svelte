<script lang="ts">
  import { onMount } from "svelte"
  import '$lib/assets/css/services.scss'

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

</script>

{#if services}
  <div class="service-container">
    {#each services as { name, description, amount }}
      <div class="service">
        <p>
          <strong>{name}:</strong>
        </p>
        <p>
          {amount}Ft
        </p>
        <br>
        <p>{description}</p>
        <br>
      </div>
    {/each}
  </div>
{:else if error}
  <p>{error.message}</p>
{:else}
  <p>Loading...</p>
{/if}
