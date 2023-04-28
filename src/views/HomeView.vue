<script setup>
import AboutHome from '../components/About/AboutHome.vue'
import NavigationBar from '../components/Navbar/NavigationBar.vue'
import CarouselHome from '../components/HomePublic/CarouselHome.vue'
import FooterRomel from '../components/Footer/FooterRomel.vue'
import MainBooking from '../components/Rooms/MainBooking.vue'
import VideoHome from '../components/HomePublic/VideoHome.vue'

import BoookNowModal from '../components/BoookNowModal.vue'
import SlickCarousel from '../components/HomePublic/SlickCarousel.vue'
</script>
<template>
  <div style="background-image: url(src/assets/video-bg.png)">
<NavigationBar/>
    <BoookNowModal/>

    <CarouselHome />
    <SlickCarousel />
    <AboutHome />

    <br />
    <MainBooking />

    <VideoHome />

    <div>
      <FooterRomel />
    </div>
  </div>
</template>
<style></style>
