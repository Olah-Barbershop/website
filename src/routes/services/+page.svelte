<script lang="ts">
  import { onMount } from "svelte"
  import '$lib/assets/css/modulardata.scss'
  import icon from '$lib/assets/scissors-solid.svg'

  const baseURL: string = import.meta.env.VITE_BASE_URL ? import.meta.env.VITE_BASE_URL : 'https://olahbarbershop.codes'

  type Service = {
    name: string,
    description: string,
    amount: number
  }
  
  let services: Service[]
  let error: Error

  const getServices: Function = async () => {
    try {
      const results: Response = await fetch(baseURL + '/services')
      if (!results.ok) {
        throw new Error('Network respone was not OK');
      }
      services = await results.json()
    } catch (err) {
      error = err
    }
  }

  onMount(getServices)
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
            <img class="service-icon" src={icon} alt="Scissors">
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
