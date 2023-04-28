<template>
  <head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
    />
  </head>
  <MDBFooter class="bg-light text-center">
 
    <div>
      <h3 class="nav-header">ROMEL<span class="header-normal">SUITES</span></h3>
      <h1 class="hybrid">Hybrid ready office workspace</h1>
    </div>
    <div style="background-color: #897051">
      <MDBContainer class="p-4 pb-0 p-0">
        
        <section class="footerf">
          <form action="">
           
            <MDBRow center class="d-flex">

              <MDBCol md="5" col="10" class="offset-md-7">
                <div class="form-row d-flex justify-content-end">
                  <div class="form-group flex-fill mx-1">
                    <label for="nameInput" style="padding-right: 80%">Name</label>
                    <MDBInput wrapperClass="mb-0" type="text" id="nameInput" />
                  </div>
                  <div class="form-group flex-fill mx-1">
                    <label for="emailInput" style="padding-right: 50%">Email</label>
                    <MDBInput wrapperClass="mb-0" type="email" id="emailInput" />
                  </div>
                </div>
              </MDBCol>

              <MDBCol md="5" col="10" class="offset-md-7">
                <div class="mt-3">
                  <label for="messageInput" style="padding-right: 90%">Message</label>
                  <MDBInput
                    wrapperClass="mb-0"
                    type="text"
                    id="messageInput"
                    style="height: 100px"
                  />
                </div>
              </MDBCol>

              <MDBContainer class="p-4 pb-0 pt-1">
               
                <section style="padding-right: 120px">
                  <p class="d-flex justify-content-end">
                    <MDBBtn outline="light" rounded class="w-50px"> SEND MESSAGE </MDBBtn>
                  </p>
                </section>
             
              </MDBContainer>

           

              <MDBCol lg="10" md="4" class="mb-0 mb-md-0">
                <div>How can we improve our space?</div>
                <div style="font-size: 18px">Share us your feedback!</div>
              </MDBCol>

              <MDBCol md="3" lg="4" xl="3" class="mx-auto mb-4">
                
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3 link-secondary"></i>
                </h6>
                <div><p>Connect with us!</p></div>
                <div>
                  <ul>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-envelope"></i>
                    <i class="bi bi-telephone-fill"></i>
                  </ul>
                </div>
                <p>168 Naguillan Road, Baguio City, Philippines</p>
                <ul style="font-weight: bold">
                  <RouterLink to="/home">Home</RouterLink>
                  <RouterLink to="/about">About</RouterLink>
                  <RouterLink to="/contact">Contact</RouterLink>
                  <RouterLink to="/contact">Contact</RouterLink>
                  <RouterLink to="/privacy-policy">Policy</RouterLink>
                </ul>
                <div>
                  <p class="copyright">ROMEL SUITES BAGUIO © 2023</p>
                </div>
              </MDBCol>

            
            </MDBRow>
           
          </form>
        </section>
       
      </MDBContainer>
    </div>
  </MDBFooter>
</template>
<script>
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdb-vue-ui-kit'

export default {
  components: {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBInput
  }
}
</script>
<style scoped>
@media (max-width: 991.98px) {
  .footerf .mb-md-0 {
    position: relative;
  }
  .mb-4 {
    position: relative;
  }
}

@media (min-width: 992px) {
  .footerf .mb-md-0 {
    position: absolute;
    padding-right: 100px;
    padding-top: 100px;
  }
  .mb-4 {
    position: absolute;
    left: 0;
    padding-left: 100px;
    width: 450px;
    padding-top: 50px;
  }
  .copyright {
    position: absolute;
    right: -250px;
  }
}

.footerf {
  color: #fff;
  font-family:'Pangram', sans-serif;
  font-size: 14px;
}
.nav-header {
  font-family: 'Pangram', sans-serif;
  color: #b77e37;
  font-size: 28px;
  font-weight: bold;
}
span.header-normal {
  font-family: 'Pangram', sans-serif;
  font-weight: lighter;
}
.hybrid {
  font-size: 15px;
  font-family: 'Pangram', sans-serif;
  color: #b77e37;
}
.bi {
  font-size: 24px;
  width: 40px;
  height: 40px;
  margin: 10px;
  padding-right: 25px;
}
</style>
