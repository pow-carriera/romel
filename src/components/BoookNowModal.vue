<template>

<div class="wrapper">
    <a href="#modal" class="popup-btn">BOOK NOW</a>
</div>

<div id="modal" class="modal">
    <div class="modal__content">

        <p class="caption">
          Booking a room requires logging in/signing up.
        </p>
        <p class="caption">
          Do you already have an account with us?
        </p>
        <div class="button-container">
          <RouterLink to="/login"><button class="button-1">Yes</button> </RouterLink>
          <RouterLink to="/registration"><button class="button-2">No</button></RouterLink>
  </div>

        
        <a href="#" class="modal__close">&times;</a>
    </div>
</div>
  </template>
  <style scoped>
.caption{
  font-family: 'Pangram', sans-serif;
  font-weight: lighter;
 text-align: center;


}

.popup-btn {
  top: 40%;
  position: fixed;
  right: -100px;
  z-index: 1000;
  transform: rotate(-90deg);
  padding: 10px 20px 30px;
  height: 20px;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
  font-family: 'Pangram';
  font-size: 14px;
  letter-spacing: 1em;
}


.modal {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(77, 77, 77, .7);
  transition: all .4s;
}

.modal:target {
  visibility: visible;
  opacity: 1;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.button-2 {
  background-color: #b77e37;
  color: black;
  border: none;
  padding: 5px;
  width: 100px;
  border-radius: 5px;
  font-size: 16px;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  
}

.button-container button:hover {
  background-color: #897051;
}
.modal__content {
  border-radius: 4px;
  position: relative;
  width: 500px;
  max-width: 90%;
  background: #fff;
  padding: 1em 2em;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.button-1 {
  background-color: white;
  color: black;
  border: none;
  width: 100px;
  padding: 5px;
  border-radius: 5px;
  font-size: 16px;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  border-style: solid;
  border-color: #000;
  border-width: 1px;
}

.modal__close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #585858;
  text-decoration: none;
}


</style>