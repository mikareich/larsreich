import axios from "axios";

export const projectService = {
  fetchProject(name) {
    return axios.get(`/projects/${name}.html`).then(response => {
      return { html: response.data, name };
    });
  },
  convertProject({ html, name }) {
    const HTMLDocument = new DOMParser().parseFromString(html, "text/html");
    return {
      article: HTMLDocument.querySelector(".toc-content").innerHTML,
      author: HTMLDocument.querySelector(".toc-content").querySelector(
        ".author"
      ).textContent,
      title: HTMLDocument.querySelector(".toc-content").querySelector(".title")
        .textContent,
      firstParagraph: HTMLDocument.querySelector(
        ".toc-content"
      ).querySelectorAll("p")[0].textContent,
      name
    };
  }
};
export const projectNames = ["MultiattributeLinearBallisticAccumulator"];
