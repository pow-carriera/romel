
 <template>
  <div class="reg-container">
    <div class="form-container">
      <div class="form-container">
      <form>
        <h2 class="title text-center">Get started</h2>
        <p class="text-center p">Ready to book your dream office space at Romel Suites Baguio? Sign up now to secure your spot!</p>
        <div class="form-group">
          <label for="firstname" class="q">First Name</label>
          <input type="email" class="form-control" id="first" placeholder="Juan" v-model="first">
        </div>
        <div class="form-group">
          <label for="password" class="q">Last Name</label>
          <input type="password" class="form-control" id="last" placeholder="Dela Cruz" v-model="last">
        </div>
        <div class="form-group">
          <label for="email" class="q">Email address</label>
          <input type="email" class="form-control" id="email" placeholder="juandelacruz@gmail.com" v-model="email">
        </div>
        <div class="form-group">
          <label for="password" class="q">Password</label>
          <input type="password" class="form-control" id="password" placeholder="*********" v-model="password">
        </div>
        <div class="text-center p">
          Create a strong password by using at least 12 characters, including uppercase, lowercase, numbers, and special characters.
        </div>
      
        <button type="submit" class="btn"> Sign Up</button> 
        <div class="text-center q">
          Already have an account?  <RouterLink to="/login"  class="p">Log In</RouterLink>
          
          <h3 class="nav-header text-center">ROMEL<span class="header-normal">SUITES</span></h3>
          <h1 class="hybrid text-center">Hybrid ready office workspace</h1>
    
        </div>
        
      </form>
      </div>
    </div>
    <div class="image-container">
      <img src="src/assets/contact.png" alt="Login Image">
    </div>
  </div>

</template>

<style scoped>

.hybrid {
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-family: 'Pangram', sans-serif;
  color: #b77e37;
}
.p{
  color: #b77e37; 
  font-family: 'Pangram', sans-serif;
  font-size: 12px;
}
.q{
  font-family: 'Pangram', sans-serif;
  font-size:12px;
}
.reg-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.title{
  font-family: 'Pangram', 'sans-serif';
  font-weight: bold;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
}

.image-container img {
  max-width: 100%;
  height: auto;
}

.form-container {
  flex: 1;
  padding: 0px;
}
form {
    max-width: 400px;
    margin: 0 auto;
    padding: 5px;
    
  }
.form-group {
    margin-bottom: 20px;
  }

  .btn {
    display: block;
    width: 390px;
    margin-top: 20px;
    padding: 5px;
    font-size: 16px;
    background-color: black;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-family: 'Pangram,' sans-serif;
  }
  .btn:hover {
    background-color: #b77e37;
  }

@media screen and (max-width: 768px) {
  .form-container {
    order: 2;
    max-width: 100%;
    margin-top: 20px;
  }
  .nav-header {
  font-family: 'Pangram', sans-serif;
  color: #000;
  font-size: 28px;
  font-weight: bold;
}

  .image-container {
    order: 1;
    flex: none;
    max-width: 100%;
    margin-top: 20px;
  }

}

</style>

<script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    }
  }
</script>
