<template>
  <div class="home">
    <v-parallax height="500" src="/img/title.webp">
      <v-row align="end" justify="start">
        <v-col cols="12">
          <h1 class="display-1  mb-4">Lars Reich</h1>
          <h4 class="subheading">Computational Psychology</h4>
        </v-col>
      </v-row>
    </v-parallax>
    <br />
    <v-container>
      <h1 class="title"># About Lars Reich</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
        praesentium illum quidem impedit. Reprehenderit eligendi, debitis
        suscipit laudantium accusamus mollitia, eveniet quis omnis ex, facilis
        ipsa porro alias quisquam quae!
      </p>
      <h1 class="title"># Projects</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis nam
        ipsam temporibus!
      </p>

      <v-lazy
        v-model="isActive"
        v-for="(project, index) in projects"
        :key="index"
        :options="{
          threshold: 0.5
        }"
        class="mb-3"
        min-height="200"
        transition="fade-transition"
      >
        <v-card>
          <v-card-title class="headline">{{ project.title }}</v-card-title>

          <v-card-subtitle>{{ project.firstParagraph }}</v-card-subtitle>

          <v-card-actions>
            <v-btn text>Read more</v-btn>
          </v-card-actions>
        </v-card>
      </v-lazy>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
      projects: [
        {
          title: "Project xy",
          firstParagraph: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                            praesentium illum quidem impedit. Reprehenderit eligendi, debitis
                            suscipit laudantium accusamus mollitia, eveniet quis omnis ex, facilis
                            ipsa porro alias quisquam quae!`,
          firstImage: "/img/title.webp"
        },
        {
          title: "Project xy",
          firstParagraph: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                            praesentium illum quidem impedit. Reprehenderit eligendi, debitis
                            suscipit laudantium accusamus mollitia, eveniet quis omnis ex, facilis
                            ipsa porro alias quisquam quae!`,
          firstImage: "/img/title.webp"
        },
        {
          title: "Project xy",
          firstParagraph: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                            praesentium illum quidem impedit. Reprehenderit eligendi, debitis
                            suscipit laudantium accusamus mollitia, eveniet quis omnis ex, facilis
                            ipsa porro alias quisquam quae!`,
          firstImage: "/img/title.webp"
        }
      ]
    };
  }
};
</script>
