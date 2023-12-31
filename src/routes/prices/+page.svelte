<script lang="ts">
  type Price = {
    name: string,
    amount: number
  }

  async function getPrices() {
    const results = await fetch('https://olahbarbershop.codes/prices')
    const prices: Price[] = await results.json()
    return prices
  }
</script>

<h1>Prices</h1>

{#await getPrices()}
  <p>Loading...</p>
{:then prices}
  <h2>The prices are as following</h2>
  <br>
  
  {#each prices as { name, amount }}
    <ul>
      <li>
        <p><strong>{name}: </strong>
        {amount}Ft</p>
      </li>
    </ul>
  {/each}
{:catch error}
  <p>{error.message}</p>
{/await}
