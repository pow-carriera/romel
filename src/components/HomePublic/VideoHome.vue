<template>
  <div class="container-xxl py-5 px-0 wow zoomIn" data-wow-delay="0.1s">
    <div class="row g-0">
      <div class="col-md-5 d-flex align-items-center">
        <div class="p-5">
          <p
            class="text-dark mb-4"
            style="font-family: 'Pangram', sans-serif; font-size: 20px; padding-right: 100px"
          >
            Have a virtual tour of our office types through this video.
          </p>
        </div>
      </div>
      <div class="col-md-7">
        <div class="video">
          <button
            type="button"
            class="btn-play"
            data-bs-toggle="modal"
            data-bs-target="#videoModal"
          >
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="videoModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content rounded-0">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Facebook Video</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- 16:9 aspect ratio -->
          <div class="ratio ratio-16x9">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fromelsuitesbaguio%2Fvideos%2F534507348874708%2F&show_text=false&width=560&t=0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Video Ends -->
</template>
<style scoped>
.video {
  position: relative;
  height: 100%;
  min-height: 400px;
  background: linear-gradient(rgba(15, 23, 43, 0.1), rgba(15, 23, 43, 0.1)),
    url(src/assets/video.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.video .btn-play {
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  box-sizing: content-box;
  display: block;
  width: 32px;
  height: 44px;
  border-radius: 50%;
  border: none;
  outline: none;
  padding: 18px 20px 18px 28px;
}

.video .btn-play:before {
  content: '';

  position: absolute;
  z-index: 0;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: block;
  width: 100px;
  height: 100px;
  background-color: #b77e37;
  border-radius: 50%;
  animation: pulse-border 1500ms ease-out infinite;
}

.video .btn-play:after {
  content: '';
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 200ms;
}

.video .btn-play img {
  position: relative;
  z-index: 3;
  max-width: 100%;
  width: auto;
  height: auto;
}

.video .btn-play span {
  display: block;
  position: relative;
  z-index: 3;
  width: 0;
  height: 0;
  border-left: 32px solid var(--dark);
  border-top: 22px solid transparent;
  border-bottom: 22px solid transparent;
}

@keyframes pulse-border {
  0% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
}

#videoModal {
  z-index: 99999;
}

#videoModal .modal-dialog {
  position: relative;
  max-width: 800px;
  margin: 60px auto 0 auto;
}

#videoModal .modal-body {
  position: relative;
  padding: 0px;
}

#videoModal .close {
  position: absolute;
  width: 30px;
  height: 30px;
  right: 0px;
  top: -30px;
  z-index: 999;
  font-size: 30px;
  font-weight: normal;
  color: #ffffff;
  background: #000000;
  opacity: 1;
}
</style>
