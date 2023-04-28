<script setup>
import NavigationBar from '../components/Navbar/NavigationBar.vue'
import BookForm from '../components/BookNow/BookForm.vue';

import { initFlowbite } from 'flowbite';
import { onMounted } from 'vue';

onMounted(()=> {
    initFlowbite();
});
</script>
<template>
    <NavigationBar />

        <BookForm />

</template>
<style>
body{
    background-image: url("/src/assets/video-bg.png");
    background-repeat: none;
    background-size: cover;
}
</style>
