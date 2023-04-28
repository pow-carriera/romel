<script setup>
import AboutHome from '../components/About/AboutHome.vue'
import CarouselHome from '../components/HomePublic/CarouselHome.vue'
import StickyBookButton from '../components/StickyBookButton.vue'
import MainBooking from '../components/Rooms/MainBooking.vue'
import VideoHome from '../components/HomePublic/VideoHome.vue'
import NavbarUser from '../components/Navbar/NavbarUser.vue'
</script>
<template style="background-image: url(src/assets/bgg.png)">
  <StickyBookButton />
  <NavbarUser />

  <CarouselHome />
  <AboutHome />
  <br />
  <MainBooking />

  <VideoHome />

  <div>
    <FooterRomel />
  </div>
</template>
<style></style>
