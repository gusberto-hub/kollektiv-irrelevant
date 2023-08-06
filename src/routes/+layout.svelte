<script>
  import Footer from '$components/footer.svelte'
  import Navbar from '$components/navbar.svelte'
  import '../app.css'
</script>

<Navbar />
<main class="min-h-screen mx-8 pt-20">
  <slot />
</main>
<Footer />
