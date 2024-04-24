<script lang="ts">
  import { onMount } from "svelte"
  import type ErrorResponse from '$lib/error.ts'
  import '$lib/assets/css/modulardata.scss'

  const baseURL: string = import.meta.env.VITE_BASE_URL || 'https://olahbarbershop.codes'

  type Location = {
    address: string,
    phone_number: string,
    monday_to_thursday: string,
    friday: string,
    saturday_to_sunday: string
  }

  let locations: Location[]
  let httpError: ErrorResponse

  const getLocations: Function = async () => {
    try {
      const results: Response = await fetch(baseURL + '/locations')
      if(!results.ok) {
        const httpError: ErrorResponse = await results.json()
        throw httpError
      }
      locations = await results.json()
    } catch (err) {
      httpError = err
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
      {#each locations as { address, phone_number, monday_to_thursday, friday, saturday_to_sunday }}
        <div class="location">
          <p>{address}</p>
          <p>{phone_number}</p>
          <br>
          <p><strong>Business hours:</strong></p>
          <div class="business-hours-line">
            <p>Monday to thursday:&nbsp;&nbsp;</p>
            <p>{monday_to_thursday}</p>
          </div>
          <div class="business-hours-line">
            <p>Friday:&nbsp;&nbsp;</p>
            <p>{friday}</p>
          </div>
          <div class="business-hours-line">
            <p>Saturday to sunday:&nbsp;&nbsp;</p>
            <p>{saturday_to_sunday}</p>
          </div>
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
