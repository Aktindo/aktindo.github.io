import fetch from "node-fetch";

class GithubAPI {
  public static async getProjects(): Promise<any> {
    const personalProjects = fetch(
      "https://api.github.com/users/aktindo/repos?per_page=69",
      { headers: { Accept: "application/vnd.github.mercy-preview+json" } }
    )
      .then((res) => res.json())
      .then((body) => {
        return body;
      });

    return personalProjects;
  }

  public static async getProject(project: string): Promise<any> {
    const projectRepo = fetch(
      `https://api.github.com/repos/aktindo/${project}`,
      { headers: { Accept: "application/vnd.github.mercy-preview+json" } }
    )
      .then((res) => (res.ok ? res.json() : null))
      .then((body) => {
        return body;
      });
    return projectRepo;
  }

  public static async getProjectStargazers(project: string): Promise<any> {
    const projectRepo = fetch(
      `https://api.github.com/repos/aktindo/${project}/stargazers`
    )
      .then((res) => (res.ok ? res.json() : null))
      .then((body) => {
        return body;
      });
    return projectRepo;
  }
}

export default GithubAPI;
