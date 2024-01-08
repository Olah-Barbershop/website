<script lang="ts">
  import { onMount } from "svelte"
  import '$lib/assets/css/modulardata.scss'

  type Location = {
    address: string,
    phoneNumber: string,
    email: string,
    mondayToThursday: string,
    friday: string,
    saturdayToSunday: string
  }

  let locations: Location[]
  let error

  onMount(async () => {
    try {
      const results = await fetch('https://olahbarbershop.codes/locations')
      if(!results.ok) {
        throw new Error('Network response was not OK')
      }
      locations = await results.json()
    } catch (err) {
      error = err
    }
  })

</script>

<div class="container">
  {#if locations}
    <div class="location-container">
      {#each locations as { address, phoneNumber, email, mondayToThursday, friday, saturdayToSunday }}
        <div class="location">
          <p>{address}</p>
          <p>{phoneNumber}</p>
          <p>{email}</p>
          <br>
          <p><strong>Business hours:</strong></p>
          <div class="line">
            <p>Monday to Thursday: </p>
            <p>{mondayToThursday}</p>
          </div>
          <div class="line">
            <p>Friday: </p>
            <p>{friday}</p>
          </div>
          <div class="line">
            <p>Saturday to Sunday: </p>
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
