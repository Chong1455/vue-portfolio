<template>
  <base-card>
    <section>
      <h1 class="center">About me</h1>
      <div class="center">
        <img src="../assets/profile.jpg" alt="profile" />
      </div>
      <p>
        I am a Computer Science student from UTAR in my second year of
        university. I currently live and study in Kampar, Perak. Learn web
        development by building several web applications which you can find in
        the project section. When I am not programming, I like to play games and
        watch movies.
      </p>
      <div class="center">
        <a
          href="https://drive.google.com/file/d/1nJKlr8JGab-tVsnxomXVnLtwp9psh4Gd/view?usp=sharing"
          target="_blank"
        >
          <base-button>View Resume</base-button>
        </a>
      </div>
    </section>
    <section>
      <br />
      <hr />
      <h2 class="center">Skills</h2>
      <div class="skills-container">
        <div class="skill grow">
          <p><img src="../assets/python.png" />Python</p>
        </div>
        <div className="skill grow">
          <p><img src="../assets/c++.png" />C++</p>
        </div>
        <div className="skill grow">
          <p><img src="../assets/java.jpg" />Java</p>
        </div>
        <div className="skill grow">
          <p><img src="../assets/html5.jpg" />HTML</p>
        </div>
        <div className="skill grow">
          <p><img src="../assets/css3.jpg" />CSS</p>
        </div>
        <div className="skill grow">
          <p><img src="../assets/js.png" />Javascript</p>
        </div>
        <div className="skill grow">
          <p><img src="../assets/react.png" />React</p>
        </div>
        <div className="skill grow">
          <p><img src="../assets/node.png" />Node</p>
        </div>
        <div className="skill grow">
          <p><img src="../assets/flask.png" />Flask</p>
        </div>
        <div className="skill grow">
          <p><img src="../assets/flutter.png" />Flutter</p>
        </div>
        <div className="skill grow">
          <p><img src="../assets/postgresql.png" />PostgreSQL</p>
        </div>
        <div className="skill grow">
          <p><img src="../assets/mongodb.png" />MongoDB</p>
        </div>
        <div className="skill grow">
          <p><img src="../assets/firebase.png" />Firebase</p>
        </div>
        <div className="skill grow">
          <p><img src="../assets/github.png" />Github</p>
        </div>
        <div className="skill grow">
          <p><img src="../assets/heroku.png" />Heroku</p>
        </div>
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

img {
  width: 200px;
  height: 220px;
  margin: 1rem;
  border-radius: 50%;
}

p {
  padding: 1rem;
  margin: 0;
}

.skills-container {
  padding-left: 10px;
}

.skill {
  border-radius: 1rem;
  border-width: 0.25rem;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: inline-block;
  width: 7rem;
  background-color: #9eebcf;
  padding: 0.5rem;
  margin: 1rem;
}

.grow {
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
}

.grow:hover,
.grow:focus {
  transform: scale(1.05);
}

.skill img {
  height: 50px;
  width: 50px;
}

.skill p {
  padding: 0;
  text-align: center;
}
</style>
