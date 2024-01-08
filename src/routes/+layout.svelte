<script lang="ts">
  import icon from '$lib/assets/icon.png'
  import '../app.scss'
  import { onMount } from 'svelte'
  import { base } from '$app/paths'

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  const menuEffect = (selector, intervalTime) => {
    document.querySelector(selector).onmouseover = event => {
        let iterations = 0;

        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {
                if(index < iterations+1) {
                    return event.target.dataset.value[index]
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("")

            if(iterations >= event.target.dataset.value.length) clearInterval(interval)

            iterations += 1 / 3
        }, intervalTime)
    }
  }

  onMount(() => {
    menuEffect('.home', 60)
    menuEffect('.contact', 30)
    menuEffect('.services', 25)
    menuEffect('.locations', 25)
  })

  const home = base + '/'
  const contact = base + '/contact'
  const services = base + '/services'
  const locations = base + '/locations'
</script>

<svelte:head>
  <meta name="google-site-verification" content="VSgLH2cb_vLXqlGC7dA2zyafU-AvTltrHtxnsXMeYSk" />
  <title>Oláh Barbershop</title>
</svelte:head>

<header>
  <nav>
    <ul class="nav-bar">
     <li class="logo"><img src={icon} alt="logo"></li>
      <input type="checkbox" id="check">
      <span class="menu">
        <li><a href={home} class="home" data-value="Home">Home</a></li>
        <li><a href={contact} class="contact" data-value="Contact">Contact</a></li>
        <li><a href={services} class="services" data-value="Services">Services</a></li>
        <li><a href={locations} class="locations" data-value="Locations">Locations</a></li>
        <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
      </span>
      <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
    </ul>
  </nav>
</header>

<slot />

<div class="wave wave1"></div>
<div class="wave wave2"></div>
<div class="wave wave3"></div>
