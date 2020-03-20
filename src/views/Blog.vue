<template>
  <div class="blog">
    <v-container>
      <h1 class="display-1">Blog</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sed
        repudiandae aut voluptate distinctio, harum asperiores eligendi magni
        officiis debitis odio quam voluptates recusandae, illum nisi dolores
        consectetur! Aspernatur, quos!
      </p>
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="project in projects" :key="project.name">
          <v-expansion-panel-header>{{
            project.title
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ project.firstParagraph }}
            <v-btn
              text
              :to="{ name: 'ProjectView', params: { name: project.name } }"
              >Read more</v-btn
            >
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["projects"])
};
</script>
