<script>
  import logo from '$lib/assets/logo-kollektiv-irrelevant.png'
</script>

<div class="flex justify-between sticky top-0 px-8 py-4">
  <a class="" href="/">
    <img
      class="w-20 animate-spin-slow"
      src={logo}
      alt="logo Kollektiv Irrelevant"
    />
  </a>

  <div class="dropdown dropdown-left md:hidden">
    <div tabindex="-1" class="m-1 btn">Links</div>
    <ul
      tabindex="-1"
      class="bg-neutral rounded-box shadow text-neutral-content p-2 w-52 flex gap-4"
    >
      <a class="btn btn-ghost btn-sm rounded-btn" href="/projects">
        Artists
      </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/events">
        Events
      </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/about">
        About
      </a>
    </ul>
  </div>

  <div class="hidden md:flex justify-end">
    <div class="flex gap-4">
      <a class="" href="/projects"> Artists </a>
      <a class="" href="/events"> Events </a>
      <a class="" href="/about"> About </a>
    </div>
  </div>
</div>
