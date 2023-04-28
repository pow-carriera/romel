<style scoped>
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
.container {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.horizontal-flex-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 350px;
}
</style>

<template>
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
  <!-- With Three types end here -->

  <!-- Pictures start here -->
  <div class="grid grid-cols-3 w-3/4 mx-auto">
    <img class="img-fluid rounded-3xl wow zoomIn p-2" src="src/assets/pics-3.jpg" />
    <img class="img-fluid rounded-3xl wow zoomIn p-2" src="src/assets/pics-2.jpg" />
    <img class="img-fluid rounded-3xl wow zoomIn p-2" src="src/assets/pics-1.jpg" />
  </div>
  <br />
  <br />
  <!-- Pictures end here -->
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
      From collaborative open spaces to private focus areas and everything in between, our office
      offers a variety of work environments to suit your unique needs and preferences. Come find
      your perfect workspace with us today.<br />
    </h2>
  </div>
</template>
