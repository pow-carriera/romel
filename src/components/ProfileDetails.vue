<template>
  <div>
    <!-- "Go Back" button -->
    <button class="go-back" @click="goBack">Go Back</button>

    <!-- "Profile" heading -->
    <h2>Profile</h2>

    <!-- Name input fields -->
    <div>
      <label for="lastname">Last Name:</label>
      <input id="lastname" v-model="lastName" type="text" />
    </div>
    <div>
      <label for="firstname">First Name:</label>
      <input id="firstname" v-model="firstName" type="text" />
    </div>

    <!-- Contact input fields -->
    <div>
      <label for="email">Email:</label>
      <input id="email" v-model="email" type="email" />
    </div>
    <div>
      <label for="contact">Contact:</label>
      <input id="contact" v-model="contact" type="text" />
    </div>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      contact: ''
    }
  },
  methods: {
    goBack() {
      // Handle going back logic here
    }
  }
}
</script>

<style scoped>
.go-back {
  border-radius: 10px;
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  position: fixed;
  background-color: black;
  left: 20px;
  z-index: 9999;
  margin: 0rem;
}
</style>
