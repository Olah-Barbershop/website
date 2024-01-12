<script lang="ts">
  import { onMount } from "svelte"
  import '$lib/assets/css/modulardata.scss'

  type Service = {
    name: string,
    description: string,
    amount: number
  }
  
  let services: Service[]
  let error: Error

  onMount(async () => {
    try {
      const results: Response = await fetch('https://olahbarbershop.codes/services')
      if (!results.ok) {
        throw new Error('Network respone was not OK');
      }
      services = await results.json()
    } catch (err) {
      error = err
    }
  })
</script>

<svelte:head>
  <title>Services</title>
</svelte:head>

<div class="container">
  {#if services}
    <div class="service-container">
      {#each services as { name, description, amount }}
        <div class="service">
          <p>
            <i class="fa-sharp fas fa-scissors"></i>
          </p>
          <br>
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
</div>
