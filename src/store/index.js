import Vue from "vue";
import Vuex from "vuex";
import { projectService, projectNames } from "../services/service";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: []
  },
  mutations: {
    ADD_PROJECT(state, project) {
      state.projects = [...state.projects, project];
    }
  },
  actions: {
    fetchAllProjects({ commit }) {
      projectNames.forEach(name => {
        projectService
          .fetchProject(name)
          .then(text =>
            commit("ADD_PROJECT", projectService.convertProject(text))
          );
      });
    },
    fetchProject(x, name) {
      return projectService.fetchProject(name).then(text => {
        return projectService.convertProject(text);
      });
    }
  }
});
