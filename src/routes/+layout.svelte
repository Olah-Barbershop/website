<script lang="ts">
  import icon from '$lib/assets/icon.png'
  import '../app.scss'
  import { onMount } from 'svelte'
  import { base } from '$app/paths'
  import { navigating } from '$app/stores'

  const letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  const menuEffect = (selector: string, intervalTime: number) => {
    document.querySelector(selector).onmouseover = event => {
        let iterations: number = 0

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
    menuEffect('.home', 52)
    menuEffect('.contact', 30)
    menuEffect('.services', 26)
    menuEffect('.locations', 23)
    menuEffect('.about', 42)
  })

  let checked: boolean

  const closeCheckBox = () => {
    checked ? checked = false : true
  }

  $: if($navigating) closeCheckBox()

  const home: string = base + '/'
  const about: string = base + '/about' 
  const contact: string = base + '/contact'
  const services: string = base + '/services'
  const locations: string = base + '/locations'

  const copyright: string = `\u00A9 ${new Date().getFullYear()} Oláh Barbershop` 
</script>

<svelte:head>
  <meta name="google-site-verification" content="VSgLH2cb_vLXqlGC7dA2zyafU-AvTltrHtxnsXMeYSk" />
</svelte:head>

<header>
  <nav>
    <ul class="nav-bar">
     <li class="logo"><a href={home}><img src={icon} alt="logo"></a></li>
      <input type="checkbox" id="check" bind:checked>
      <span class="menu">
        <li><a href={home} class="home" data-value="Home">Home</a></li>
        <li><a href={services} class="services" data-value="Services">Services</a></li>
        <li><a href={locations} class="locations" data-value="Locations">Locations</a></li>
        <li><a href={contact} class="contact" data-value="Contact">Contact</a></li>
        <li><a href={about} class="about" data-value="About">About</a></li>
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
<div class="copyright">{copyright}</div>
