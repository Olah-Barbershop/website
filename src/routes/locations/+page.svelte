<script lang="ts">
  import { onMount } from "svelte"
  import '$lib/assets/css/modulardata.scss'

  const baseURL: string = import.meta.env.VITE_BASE_URL ? import.meta.env.VITE_BASE_URL : 'https://olahbarbershop.codes'

  type Location = {
    address: string,
    phoneNumber: string,
    mondayToThursday: string,
    friday: string,
    saturdayToSunday: string
  }

  let locations: Location[]
  let error: Error

  const getLocations: Function = async () => {
    try {
      const results: Response = await fetch(baseURL + '/locations')
      if(!results.ok) {
        throw new Error('Network response was not OK')
      }
      locations = await results.json()
    } catch (err) {
      error = err
    }
  }

  onMount(getLocations)
</script>

<svelte:head>
  <title>Our locations</title>
</svelte:head>

<div class="container">
  {#if locations}
    <div class="location-container">
      {#each locations as { address, phoneNumber, mondayToThursday, friday, saturdayToSunday }}
        <div class="location">
          <p>{address}</p>
          <p>{phoneNumber}</p>
          <br>
          <p><strong>Business hours:</strong></p>
          <div class="business-hours-line">
            <p>Monday to Thursday:&nbsp;&nbsp;</p>
            <p>{mondayToThursday}</p>
          </div>
          <div class="business-hours-line">
            <p>Friday:&nbsp;&nbsp;</p>
            <p>{friday}</p>
          </div>
          <div class="business-hours-line">
            <p>Saturday to Sunday:&nbsp;&nbsp;</p>
            <p>{saturdayToSunday}</p>
          </div>
        </div>
      {/each}
    </div>
  {:else if error}
    <p>{error.message}</p>
  {:else}
    <p>Loading...</p>
  {/if}
</div>
