<script setup>
import NavigationBar from '../components/Navbar/NavigationBar.vue'
import ContactRomel from '../components/ContactRomel.vue'
import FooterRomel from '../components/Footer/FooterRomel.vue'
</script>

<template>
  <div style="background-image: url(src/assets/video-bg.png)">
    <NavigationBar />
    <div><ContactRomel /></div>

    <div style="padding-top: 280px">
      <FooterRomel />
    </div>
  </div>
</template>
