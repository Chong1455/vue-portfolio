<template>
  <base-card>
    <section>
      <h1 class="center">Contact me</h1>
      <div class="container">
        <div class="push">
          <img src="../assets/email.png" />
        </div>
        <a target="_blank" href="mailto:koksianchong@gmail.com"
          ><h3>koksianchong@gmail.com</h3></a
        >
      </div>
      <div class="container">
        <div class="push">
          <img src="../assets/github.png" />
        </div>
        <a target="_blank" href="https://github.com/Chong1455"
          ><h3>https://github.com/Chong1455</h3></a
        >
      </div>
      <div class="container">
        <div class="push">
          <img src="../assets/linkedin.png" />
        </div>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/chong-kok-sian-139456201/"
          ><h3>https://www.linkedin.com/in/chong-kok-sian-139456201/</h3></a
        >
      </div>
    </section>
  </base-card>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  justify-content: flex-start;
  padding-left: 12px;
}

img {
  width: 35px;
  height: 35px;
}

.push {
  padding-top: 12px;
}

a {
  /* margin: 20px; */
  float: right;
  margin: 0;
  padding-left: 10px;
}
</style>
