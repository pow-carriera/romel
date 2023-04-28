<template>
  <div class="login-container">
    <div class="image-container">
      <img src="src/assets/contact.png" alt="Login Image">
    </div>
    <div class="form-container">
      <form>
        <h2 class="title">Welcome back</h2>
        <p class="text-center p" > Please enter your details.</p>
        <div class="form-group ">
          <label for="email" class="q">Email address</label>
          <input type="email" class="form-control " id="email" placeholder="juandelacruz@gmail.com" v-model="email">
        </div>
        <div class="form-group ">
          <label for="password" class="q">Password</label>
          <input type="password" class="form-control " id="password" placeholder="*********" v-model="password">
        </div>
        <div class="text-center q">
          Forgot password?
        </div>
        <button type="submit" class="btn btn-primary">Log In</button>
        <div class="text-center q">

          
          Don't have an account? <RouterLink to="/registration"  class="p">Sign Up</RouterLink>
          
          <h3 class="nav-header text-center">ROMEL<span class="header-normal">SUITES</span></h3>
          <h1 class="hybrid text-center">Hybrid ready office workspace</h1>
    
        </div>
        
      </form>
    </div>
  </div>
</template>

<style scoped>
.p{
  color: #b77e37; 
  font-family: 'Pangram', sans-serif;
}
.q{
  font-family: 'Pangram', sans-serif;
  font-size:12px;
}


.hybrid {
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-family: 'Pangram', sans-serif;
  color: #b77e37;
}
.title{
  font-family: 'Pangram', 'sans-serif';
  font-weight: bold;
}
  .login-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  .image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
   
  }
  .image-container img {
    max-width: 100%;
    height: auto;
  }
  .form-container {
    flex: 1;
    padding: 20px;
  }
  form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    
  }
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  .form-group {
    margin-bottom: 20px;
  }
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
  }
  .btn-primary {
    display: block;
    width: 100%;
    margin-top: 20px;
    padding: 10px;
    font-size: 16px;
    background-color: black;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-family: 'Pangram,' sans-serif;
  }
  .btn-primary:hover {
    background-color: #b77e37;
  }
  @media screen and (max-width: 768px) {
    .form-container {
      flex: none;
      max-width: 100%;
      margin-top: 20px;
    }
    .nav-header {
  font-family: 'Pangram', sans-serif;
  color: #000;
  font-size: 28px;
  font-weight: bold;
}
  
span.header-normal {
  font-family: 'Pangram', sans-serif;
  font-weight: lighter;
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
