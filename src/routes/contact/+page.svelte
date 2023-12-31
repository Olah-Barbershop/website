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
    letterise(".mail");
    letterise(".insta");
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
            <p class="fancy word tel"><span class="letter">0</span><span class="letter">6</span><span class="letter">(</span><span class="letter">2</span><span class="letter">0</span><span class="letter">)</span><span class="letter">8</span><span class="letter">0</span><span class="letter">2</span><span class="letter">6</span><span class="letter">2</span><span class="letter">1</span><span class="letter">6</span></p>
        </a>
    </div>
    <div class="line">
        <a href="mailto:olahbarbershop@gmail.com" target="_blank">
            <p class="fancy word mail"><span class="letter">➞</span><span class="letter">E</span><span class="letter">M</span><span class="letter">A</span><span class="letter">I</span><span class="letter">L</span></p>
        </a>
        <a href="https://instagram.com/olahbarbershop" target="_blank">
            <p class="fancy word insta"><span class="letter">➞</span><span class="letter">I</span><span class="letter">N</span><span class="letter">S</span><span
class="letter">T</span><span class="letter">A</span></p>
        </a>
    </div>
</div>
