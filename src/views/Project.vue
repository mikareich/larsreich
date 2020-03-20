<template>
  <v-container>
    <h1 class="display-1">{{ project.title }}</h1>
    <h3 class="overline">By {{ project.author }}</h3>
    <v-divider></v-divider>
    {{ project.article }}
  </v-container>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {
      project: {}
    };
  },
  created() {
    this.$store.dispatch("fetchProject", this.name).then(project => {
      this.project = project;
    });
  }
};
</script>

<style lang="scss" scoped></style>
