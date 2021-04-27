<template>
  <section>
    <project-filter @change-filter="setFilters"></project-filter>
  </section>
  <section>
    <project-card>
      <h1>Projects</h1>
      <ul>
        <project-item
          v-for="project in filteredProjects"
          :key="project.id"
          :id="project.id"
          :name="project.name"
          :description="project.description"
          :areas="project.areas"
          :technology="project.technology"
          :imageName="project.imageName"
          :demoLink="project.demoLink"
        ></project-item>
      </ul>
    </project-card>
  </section>
</template>

<script>
import ProjectItem from "../../components/projects/ProjectItem.vue";
import ProjectFilter from "../../components/projects/ProjectFilter.vue";

export default {
  components: {
    ProjectItem,
    ProjectFilter,
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    filteredProjects() {
      const projects = this.$store.getters["projects/projects"];
      return projects.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes("backend")) {
          return true;
        }
        return false;
      });
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  display: grid;
  align-content: center;
  justify-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
  margin: 0px 10px;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}

h1 {
  display: flex;
  justify-content: center;
  font-size: 2rem;
}
</style>
