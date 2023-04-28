<template>
  <div class="container" :style="{ backgroundImage: currentBackground }">
    <div class="top-panel">
      <div class="button-container">
        <button
          @click="
            setCurrentImages(images1),
              setCurrentBackground(backgroundImages[0]),
              (currentCaption = captions[0])
          "
        >
          Office Type 1
        </button>
        <button
          @click="
            setCurrentImages(images2),
              setCurrentBackground(backgroundImages[1]),
              (currentCaption = captions[1])
          "
        >
          Office Type 2
        </button>
        <button
          @click="
            setCurrentImages(images3),
              setCurrentBackground(backgroundImages[2]),
              (currentCaption = captions[2])
          "
        >
          Office Type 3
        </button>
      </div>
    </div>
    <div class="caption-wrapper">
      <div class="first-three-words">{{ currentCaption.split(' ').slice(0, 3).join(' ') }}</div>
      <div class="caption-container">
        <p>
          <span>{{ currentCaption.split(' ').slice(3).join(' ') }}</span>
        </p>
      </div>
    </div>

    <div class="bottom-panel">
      <div class="image-container" v-for="(image, index) in currentImages" :key="index">
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>
  </div>
</template>

<script>
const buttons = document.querySelectorAll('.btn')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove "btn-big" class from all buttons
    buttons.forEach((btn) => btn.classList.remove('btn-big'))

    // Add "btn-big" class to clicked button
    button.classList.add('btn-big')
  })
})

export default {
  data() {
    return {
      images1: [
        { src: 'src/assets/1.jpg', alt: 'Image 1' },
        { src: 'src/assets/1-1.png', alt: 'Image 2' },
        { src: 'src/assets/1-2.png', alt: 'Image 3' }
      ],
      images2: [
        { src: 'src/assets/2-1.png', alt: 'Image 1' },
        { src: 'src/assets/2-2.png', alt: 'Image 2' },
        { src: 'src/assets/2-3.png', alt: 'Image 3' }
      ],
      images3: [
        { src: 'src/assets/3-1.png', alt: 'Image 1' },
        { src: 'src/assets/3-2.png', alt: 'Image 2' },
        { src: 'src/assets/3-3.png', alt: 'Image 3' }
      ],
      currentImages: [],
      backgroundImages: [
        'src/assets/officetype1.png',
        'src/assets/officetype2.png',
        'src/assets/officetype3.png'
      ],
      currentBackground: 'url(src/assets/officetype1.png)',
      captions: [
        'OFFICE TYPE 1 Ideal for expanding agencies, clinics, studios and firms.',
        'OFFICE TYPE 2 Ideal for expanding companies and medium-sized companies.',
        'OFFICE TYPE 3 Ideal for SMEs Design Studios and Start up businesses.'
      ],
      currentCaption: ''
    }
  },
  mounted() {
    this.setCurrentImages(this.images1)
    this.currentCaption = this.captions[0]
  },
  methods: {
    setCurrentImages(images) {
      this.currentImages = images
    },
    setCurrentBackground(background) {
      this.currentBackground = `url(${background})`
    }
  },
 
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column; /* change flex-direction to column */
  height: 100vh; /* set height to full viewport height */
  width: 100%;
  padding-top: 60px; /* adjust this value based on your navbar height */
  background-size: cover; /* make sure the background covers the full screen */
  background-position: center; /* center the background image */
  max-width: 1440px;
}

.top-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* align items to the center horizontally */
  height: 25%; /* set the height to 25% of the container */
  padding: 1rem;
}

.button-container {
  display: flex;
  align-items: center;
  margin-bottom: 1rem; /* add margin-bottom to create space between the buttons and the caption */
}

.button-container button {
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 3px 20px;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 30px;
  transition: background-color 0.3s ease;
}

.button-container button:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.button-container button:active {
  background-color: pink;
  padding: 12px 22px;
  border: 2px solid pink;
}
.bottom-panel {
  display: flex;
  flex-wrap: wrap; /* change flex-wrap to wrap */
  justify-content: center; /* align items to the center horizontally */
  align-items: center; /* align items to the center vertically */
  height: 75%; /* set the height to 75% of the container */
  padding: 1rem;
}

.image-container {
  margin: 0.5rem;
  width: calc(23.33% - 1rem);
  height: calc(50.33% - 1rem);
  position: relative;

  max-width: 1300px;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.caption-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.first-three-words {
  font-size: 64px;
  font-weight: bold;
  color: #fff;
  font-size: 65px;
  font-family: 'Pangram', sans-serif;
  justify-content: center;
  padding-left: 60px;
  position: absolute;
  padding-top: 2px;
}

.caption-container {
  color: white;
  font-size: 20px;
  font-family: 'Pangram', 'sans-serif';
  text-align: center;
  margin-top: 80px;
}

.caption-container p {
  margin: 0;
}

.caption-container span {
  display: block;
}
</style>
