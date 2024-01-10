<script lang="ts">
  import { onMount } from "svelte"
  import '$lib/assets/css/contact.scss'

  const letterise = (element: HTMLElement) => {
      const text: string[] = element.innerText.split("")

      element.innerText = ""

      text.forEach((letter: string) => {
        const span = document.createElement('span')

        span.className = "letter"
        span.innerText = letter

        element.appendChild(span)
      })
  }

  type Contact = {
    name: string,
    link: string
  }

  type Line = {
    left: Contact,
    right: Contact
  }

  let lines: Line[]
  let error: Error

  onMount(async () => {
    try {
      const results: Response = await fetch('https://olahbarbershop.codes/contacts')
      if(!results.ok) {
        throw new Error('Network response was not OK.')
      }
      lines = await results.json()
    } catch (err) {
      error = err
    }
  })

  </script>

 <div class="text">
    {#if lines}
      <div class="line">
        <p class="word normal">This</p>
        <p class="word normal">Is</p>
        <p class="word normal">Your</p>
      </div>
      <div class="line">
        <p class="word normal">Barbershop</p>
        <p class="word normal">▼</p>
      </div>
      {#each lines as { left, right }}
        <div class="line">
          <a href={left.link} target="_blank">
            <p use:letterise class={"fancy word " + left.name}>{left.name}</p>
          </a>
          <a href={right.link} target="_blank">
            <p use:letterise class={"fancy word " + right.name}}>{right.name}</p>
          </a>
        </div>
      {/each}
    {:else if error}
      <p>{error.message}</p>
    {:else}
      <p>Loading...</p>
    {/if}
</div>
