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
    letterise(".tel");
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
        <a href="tel:+36208026216">
            <p class="fancy word tel">06(20)8026216</p>
        </a>
    </div>
    <div class="line">
      <a href="https://instagram.com/olahbarbershop" target="_blank">
        <p class="fancy word insta">➞Insta</p>
      </a>
      <a href="https://dev.to/olahbarbershop" target="_blank">
        <p class="fancy word dev">➞DEV</p>
      </a>
    </div>
    <div class="line">
      <a href="https://threads.net/@olahbarbershop" target="_blank">
        <p class="fancy word threads">➞Threads.net</p>
      </a>
      
    </div>
</div>
