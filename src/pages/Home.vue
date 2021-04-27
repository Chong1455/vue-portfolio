<template>
  <body>
    <h1><strong>CHONG KOK SIAN | PORTFOLIO</strong></h1>
    <div class="buffer">
      <router-link to="/about"
        ><button class="btn">FIND OUT MORE</button></router-link
      >
    </div>
  </body>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat");

* {
  margin: 0px;
  padding: 0px;
}

body {
  background: url("../assets/header2.jpg") no-repeat center center fixed;
  background-size: cover;
  height: 31.7rem;
  width: 100%;
}

h1 {
  font-family: "Montserrat", sans-serif;
  font-size: 3rem;
  color: #e2dbdb;
  text-align: center;
  padding-top: 77px;
}

.buffer {
  display: flex;
  justify-content: center;
  padding-top: 210px;
}

.btn {
  padding: 0.75rem 2rem;
  font: inherit;
  background-color: #f05f44;
  border: 1px solid #f05f44;
  color: white;
  cursor: pointer;
  border-radius: 30px;
}

.btn:hover {
  background-color: #ee4b08;
  border-color: #ee4b08;
  border-width: 4px;
  cursor: pointer;
}
</style>
