<script lang="ts">
  import { onMount } from "svelte"
  import '$lib/assets/css/contact.scss'

  const letterise = elclass => {
    const element = document.querySelector(elclass),
          text = element.innerText.split("");

    element.innerText = "";

    text.forEach(letter => {
      const span = document.createElement('span');

      span.className = "letter";
      span.innerText = letter;

      element.appendChild(span);
    });
  };

  onMount(() => {
    letterise(".email");
    letterise(".insta");
    letterise(".threads");
    letterise(".dev");
  })
</script>

 <div class="text">
    <div class="line">
        <p class="word normal">This</p>
        <p class="word normal">Is</p>
        <p class="word normal">Your</p>
    </div>
    <div class="line">
        <p class="word normal">Barbershop</p>
        <p class="word normal">▼</p>
    </div>
    <div class="line">
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
    </div>
</div>
