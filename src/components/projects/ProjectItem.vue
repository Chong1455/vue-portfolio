<template>
  <li>
    <img :src="imageUrl" :alt="name" />
    <h3>{{ name }}</h3>
    <h4>{{ description }}</h4>
    <h4>Technology: {{ technology }}</h4>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
    </div>
    <div class="center">
      <a :href="demoLink" target="_blank">
        <base-button mode="outline">See Live</base-button>
      </a>
      <a :href="githubLink" target="_blank" class="githubLink">
        Source Code
      </a>
    </div>
  </li>
</template>

<script>
export default {
  props: [
    "id",
    "name",
    "description",
    "areas",
    "technology",
    "imageName",
    "demoLink",
    "githubLink",
  ],
  computed: {
    imageUrl() {
      return require("../../assets/" + this.imageName);
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  display: grid;
}

h3 {
  font-size: 1.5rem;
  padding: 0 1rem;
}

h3,
h4 {
  margin: 0.5rem 0;
  padding: 0 1rem;
}

div {
  margin: 0.5rem 0;
  padding: 0 1rem;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

img {
  height: 150px;
  width: 100%;
  border-radius: 12px;
}

a {
  text-decoration: none;
}

.center {
  display: flex;
  justify-content: center;
}

.githubLink {
  color: black;
  padding: 0.75rem;
}
</style>
