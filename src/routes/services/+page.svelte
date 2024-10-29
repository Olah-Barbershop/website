<script lang="ts">
  import { onMount } from "svelte"
  import type ErrorResponse from '$lib/error.ts'
  import '$lib/assets/css/modulardata.scss'
  import scissorsIcon from '$lib/assets/scissors-solid.svg'

  const baseURL: string = import.meta.env.VITE_BASE_URL || 'https://olahbarbershop.codes'

  type Service = {
    name: string,
    description: string,
    amount: number
  }
  
  let services: Service[] = $state()
  let httpError: ErrorResponse = $state()

  const getServices: Function = async () => {
    try {
      const results: Response = await fetch(baseURL + '/services')
      if (!results.ok) {
				const httpError: ErrorResponse = await results.json()
				throw httpError
      }
      services = await results.json()
    } catch (err) {
      httpError = err
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
            <img class="service-icon" src={scissorsIcon} alt="Scissors">
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
  {:else if httpError}
    <div class="error">
      <p>{httpError["error"].status} - {httpError["error"].message}</p>
      <br>
      <a href={httpError["error"].cat}><img src={httpError["error"].cat} alt={httpError["error"].status + ' cat'}/></a>
    </div>
  {:else}
    <p>Loading...</p>
  {/if}
</div>
