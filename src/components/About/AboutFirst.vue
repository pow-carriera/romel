<template>
  <body
    class="body"
    style="
      background-image: url(src/assets/bgg.png);
      background-repeat: no-repeat;
      background-size: cover;
    "
  >
    <div class="container-fluid">
      <div class="row"></div>
    </div>
    <div class="container-fluid page-header mb-5 p-0">
      <div class="page-header-inner py-5">
        <div class="wow zoomIn container text-center pb-5">
          <h1 class="display-10 mb-3" style="line-height: 0; margin-top: 5%; margin-right: 71.5%">
            <span style="font-family: 'Pangram', sans-serif; font-weight: lighter; color: #1e1e1e"
              >WELCOME TO</span
            >
          </h1>
          <h1
            class="display-3 mb-3"
            style="line-height: 1; margin-right: 60.5%; color: #1e1e1e; margin-bottom: 10%"
          >
            ROMEL<span style="font-family: 'Pangram', sans-serif; font-weight: lighter"
              >SUITES</span
            >
          </h1>
        </div>
        <!-- Pictures start here -->
        <div class="horizontal-flex-container">
          <img class="img-fluid rounded wow zoomIn" src="src/assets/1-about.jpg" />
          <img class="img-fluid rounded wow zoomIn" src="src/assets/2-about.jpg" />
          <img class="img-fluid rounded wow zoomIn" src="src/assets/3-about.jpg" />
        </div>
        <!-- Pictures end here -->
        <!-- title - bottom -->
        <div style="margin-left: 35.5%">
          <h1 class="wow fadeInUp mb-3" style="font-size: 150%; margin-top: 2%; color: #1e1e1e">
            ROMEL<span
              style="font-family: 'Pangram', sans-serif; font-weight: lighter; font-size: 100%"
              >SUITES</span
            >
            <span
              style="
                margin-left: 2px;
                font-size: 100%;
                font-family: 'Pangram', sans-serif;
                font-weight: 800;
              "
            >
              has you covered.</span
            >
          </h1>
        </div>

        <div style="text-align: center">
          <h2
            class="display-3 mb-3"
            style="
              font-size: 150%;
              color: #1e1e1e;
              font-family: 'Pangram', sans-serif;
              font-weight: 549;
              font-size: 130%;
            "
          >
            With three types of office spaces to choose from, including private offices, meeting
            <br />rooms, and bigger spaces for expansion, Romel Suites has options to fit all your
            <br />business needs.
          </h2>
        </div>

        <div class="horizontal-flex-container">
          <img class="img-fluid rounded wow zoomIn" src="src/assets/pics-3.jpg" />
          <img class="img-fluid rounded wow zoomIn" src="src/assets/pics-2.jpg" />
          <img class="img-fluid rounded wow zoomIn" src="src/assets/pics-1.jpg" />
        </div>

        <div class="container">
          <a href="#" class="bbutton">
            <div class="bbutton__line"></div>
            <div class="bbutton__line"></div>
            <span class="bbutton__text">BROWSE OPTIONS</span>
            <div class="bbutton__drow1"></div>
            <div class="bbutton__drow2"></div>
          </a>
        </div>

        <div div class="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.2321509882536!2d120.58159471430085!3d16.41303193449321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a12a7a266ee1%3A0xcd81995f9e8d0ab9!2sRomel%20Suites!5e0!3m2!1sen!2sph!4v1681302502661!5m2!1sen!2sph"
            width="500"
            height="400"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div style="text-align: center; margin-top: 1%">
          <h2
            class="display-3 mb-3"
            style="
              color: #1e1e1e;
              font-family: 'Pangram', sans-serif;
              font-weight: 549;
              font-size: 20px;
            "
          >
            Located in a prime spot in Baguio City, Romel Suites offers excellent customer service
            and hassle-free solutions to help your business thrive. Don't let the stress of finding
            the right office space hold you back - choose Romel Suites Baguio and focus on what
            really matters - growing your business!
          </h2>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
.map-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.map-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.map-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
}

.map-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media screen and (min-width: 768px) {
  .map-container {
    height: 500px;
  }
}

.horizontal-flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.horizontal-flex-container img {
  max-width: 30%;
  height: auto;
}

@media screen and (max-width: 768px) {
  .horizontal-flex-container {
    flex-direction: column;
    align-items: center;
  }

  .horizontal-flex-container img {
    margin-bottom: 0;
  }
}

/*browse btn*/

.bbutton {
  position: relative;
  z-index: 0;
  width: 240px;
  height: 56px;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  color: var(--line_color);
  letter-spacing: 2px;
  transition: all 0.3s ease;
  border: 1px solid black;
  border-radius: 10%;
}

.bbutton__text {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.bbutton::before,
.bbutton::after,
.bbutton__text::before,
.bbutton__text::after {
  content: '';
  position: absolute;
  height: 3px;
  border-radius: 13px;
  background: var(--line_color);
  transition: all 0.5s ease;
}

.bbutton::before {
  top: 0;
  left: 54px;
  width: calc(100% - 56px * 2 - 16px);
}

.bbutton::after {
  top: 0;
  right: 54px;
  width: 8px;
}

.bbutton__text::before {
  bottom: 0;
  right: 54px;
  width: calc(100% - 56px * 2 - 16px);
}

.bbutton__text::after {
  bottom: 0;
  left: 54px;
  width: 8px;
}

.bbutton__line {
  position: absolute;
  top: 0;
  width: 56px;
  height: 100%;
  overflow: hidden;
}

.bbutton__line::before {
  content: '';
  position: absolute;
  top: 0;
  width: 150%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 13px;
  border: solid 3px var(--line_color);
}

.bbutton__line:nth-child(1),
.bbutton__line:nth-child(1)::before {
  left: 0;
}

.bbutton__line:nth-child(2),
.bbutton__line:nth-child(2)::before {
  right: 0;
}

.bbutton:hover {
  letter-spacing: 6px;
}

.bbutton:hover::before,
.bbutton:hover .bbutton__text::before {
  width: 8px;
}

.bbutton:hover::after,
.bbutton:hover .bbutton__text::after {
  width: calc(100% - 56px * 2 - 16px);
}

.bbutton__drow1,
.bbutton__drow2 {
  position: absolute;
  z-index: -1;
  border-radius: 13px;
  transform-origin: 16px 16px;
}

.bbutton__drow1 {
  top: -16px;
  left: 40px;
  width: 32px;
  height: 0;
  transform: rotate(30deg);
}

.bbutton__drow2 {
  top: 44px;
  left: 77px;
  width: 32px;
  height: 0;
  transform: rotate(-127deg);
}

.bbutton__drow1::before,
.bbutton__drow1::after,
.bbutton__drow2::before,
.bbutton__drow2::after {
  content: '';
  position: absolute;
}

.bbutton__drow1::before {
  bottom: 0;
  left: 0;
  width: 0;
  height: 32px;
  border-radius: 13px;
  transform-origin: 16px 16px;
  transform: rotate(-60deg);
}

.bbutton__drow1::after {
  top: -10px;
  left: 45px;
  width: 0;
  height: 32px;
  border-radius: 13px;
  transform-origin: 16px 16px;
  transform: rotate(69deg);
}

.bbutton__drow2::before {
  bottom: 0;
  left: 0;
  width: 0;
  height: 32px;
  border-radius: 13px;
  transform-origin: 16px 16px;
  transform: rotate(-146deg);
}

.bbutton__drow2::after {
  bottom: 26px;
  left: -40px;
  width: 0;
  height: 32px;
  border-radius: 13px;
  transform-origin: 16px 16px;
  transform: rotate(-262deg);
}

.bbutton__drow1,
.bbutton__drow1::before,
.bbutton__drow1::after,
.bbutton__drow2,
.bbutton__drow2::before,
.bbutton__drow2::after {
  background: var(--back_color);
}

.bbutton:hover .bbutton__drow1 {
  animation: drow1 ease-in 0.06s;
  animation-fill-mode: forwards;
}

.bbutton:hover .bbutton__drow1::before {
  animation: drow2 linear 0.08s 0.06s;
  animation-fill-mode: forwards;
}

.bbutton:hover .bbutton__drow1::after {
  animation: drow3 linear 0.03s 0.14s;
  animation-fill-mode: forwards;
}

.bbutton:hover .bbutton__drow2 {
  animation: drow4 linear 0.06s 0.2s;
  animation-fill-mode: forwards;
}

.bbutton:hover .bbutton__drow2::before {
  animation: drow3 linear 0.03s 0.26s;
  animation-fill-mode: forwards;
}

.bbutton:hover .bbutton__drow2::after {
  animation: drow5 linear 0.06s 0.32s;
  animation-fill-mode: forwards;
}

@keyframes drow1 {
  0% {
    height: 0;
  }

  100% {
    height: 100px;
  }
}

@keyframes drow2 {
  0% {
    width: 0;
    opacity: 0;
  }

  10% {
    opacity: 0;
  }

  11% {
    opacity: 1;
  }

  100% {
    width: 120px;
  }
}

@keyframes drow3 {
  0% {
    width: 0;
  }

  100% {
    width: 80px;
  }
}

@keyframes drow4 {
  0% {
    height: 0;
  }

  100% {
    height: 120px;
  }
}

@keyframes drow5 {
  0% {
    width: 0;
  }

  100% {
    width: 124px;
  }
}

/* button_browse options end here */

.container {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Pictures style */
.horizontal-flex-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 350px;
}
@media (max-width: 576px) {
  h1.display-10 {
    margin-right: 0;
  }
  h1.display-3 {
    margin-right: 0;
  }
}
</style>
