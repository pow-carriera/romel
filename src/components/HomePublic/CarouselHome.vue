<template>
  <!-- Carousel Start -->

  <div class="container-fluid p-0 mb-5 w-full h-auto mx-auto">
    <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="w-full" src="src/assets/1.png" alt="Image" />
          <div class="carousel-caption d-flex flex-column justify-content-center position-absolute">
            <span style="font-family: 'Pangram', sans-serif; font-size: 20px; color: black"> </span>
            <a href="/" class="browse-btn">BROWSE OPTIONS</a>
          </div>
        </div>
        <div class="carousel-item">
          <img class="w-100" src="src/assets/2.png" alt="Image" />
          <div class="carousel-caption d-flex flex-column justify-content-center">
            <a href="/" class="browse-btn">BROWSE OPTIONS </a>
          </div>
        </div>
        <div class="carousel-item">
          <img class="w-100" src="src/assets/3.png" alt="Image" />
          <div class="carousel-caption d-flex flex-column justify-content-center">
            <a href="/" class="browse-btn">BROWSE OPTIONS </a>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <!-- Carousel End -->
</template>
<script></script>
<style scoped>
.carousel-caption {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.carousel-control-prev {
  width: 10%;
}
.carousel-control-next {
  width: 10%;
}

.carousel-control-prev-icon {
  width: 2rem;
  height: rem;
}
.carousel-control-next-icon {
  width: 2rem;
  height: rem;
}
@media (max-width: 768px) {
  .carousel-item {
    min-height: 300px;
  }

  .carousel-item img {
    object-position: center;
    object-fit: cover;
  }

  .carousel-caption {
    bottom: 0;
    left: 0;
    right: 0;
    top: unset;
    text-align: center;
  }
}

.browse-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5px 40px;
  font-weight: bold;
  font-family: 'Pangram', sans-serif;
  font-size: 14px;
  position: absolute;
  bottom: 25%;
  right: 13.5%;
  text-decoration: none;
  color: #000;
  backface-visibility: hidden;
  border: 0.1rem solid transparent;
  border-radius: 10px;
}

.browse-btn {
  border-color: #000;
  transition: transform 0.2s cubic-bezier(0.235, 0, 0.05, 0.95);
}

.browse-btn:hover {
  transform: perspective(1px) scale3d(1.044, 1.044, 1) translateZ(0) !important;
}
</style>
<script>
import $ from 'jquery'
import 'bootstrap'
</script>
