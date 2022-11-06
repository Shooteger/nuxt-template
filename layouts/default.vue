<template>
  <div>
    <header><Navigation /></header>

    <main><Nuxt /></main>

    <footer><Footer /></footer>
  </div>
</template>
    
<script>
import Navigation from "~/components/global/Navbar.vue";
import Footer from "~/components/global/Footer.vue";

export default { components: { Navigation, Footer } };
</script>