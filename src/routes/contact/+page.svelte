<script lang="ts">
  import { onMount } from "svelte"
  import '$lib/assets/css/contact.scss'

  const letterise = elclass => {
    const elements = document.querySelectorAll(elclass)

    for(const element of elements) {
      const text = element.innerText.split("")

      element.innerText = ""

      text.forEach(letter => {
        const span = document.createElement('span')

        span.className = "letter"
        span.innerText = letter

        element.appendChild(span)
      })
    }
  }

  type Contact = {
    name: string,
    link: string
  }

  type Line = {
    /**
     * Left contact
     */
    left: Contact,
    right: Contact
  }

  let lines: Line[]
  let error: Error

  onMount(async () => {
    try {
      const results = await fetch('https://olahbarbershop.codes/contacts')
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
        <!--div class="line">
      <a href="mailto:contact@olahbarbershop.codes" target="_blank">
        <p class="fancy word email">Email</p>
      </a>
      <a href="https://instagram.com/olahbarbershop" target="_blank">
        <p class="fancy word insta">Insta</p>
      </a>
    </div>
    <div class="line">
      <a href="https://threads.net/@olahbarbershop" target="_blank">
        <p class="fancy word threads">Threads</p>
      </a>
      <a href="https://dev.to/olahbarbershop" target="_blank">
        <p class="fancy word dev">DEV</p>
      </a>
    </div-->
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
            <p class={"fancy word " + left.name}>{left.name}</p>
          </a>
          <a href={right.link} target="_blank">
            <p class={"fancy word " + right.name}>{right.name}</p>
          </a>
        </div>
      {/each}
      {void letterise('.fancy') ?? ""}
    {:else if error}
      <p>{error.message}</p>
    {:else}
      <p>Loading...</p>
    {/if}
</div>
