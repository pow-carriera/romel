<script setup>
import BookingCarousel1 from '../components/Booking/BookingCarousel1.vue';
import BookingCaptions from '../components/Booking/BookingCaptions.vue';
import BookingTitle from '../components/Booking/BookingTitle.vue'
import BookingHeader from '../components/Booking/BookingHeader.vue'
import BookingButton from '../components/Booking/BookingButtons.vue'

import { initFlowbite } from 'flowbite';
import { onMounted } from 'vue';

onMounted(()=> {
    initFlowbite();
});
</script>
<template>
    <div class="mt-20  mr-40 ml-40">
        <BookingTitle />
        <BookingHeader />
        <div class="grid grid-cols-3 w-full">
          <BookingCarousel1 />
          <BookingCaptions />
          <BookingButton />
        </div>
        
    </div>

</template>

<style>
body{
    background-image: url("/src/assets/video-bg.png");
    background-repeat: none;
    background-size: cover;
}
</style>
