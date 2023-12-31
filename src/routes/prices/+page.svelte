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

<h2>The prices are as following</h2>

{#await getPrices()}
  <p>Loading...</p>
{:then posts}
  <pre>
    {JSON.stringify(posts, null, 2)}
  </pre>
{:catch error}
  <p>{error.message}</p>
{/await}
