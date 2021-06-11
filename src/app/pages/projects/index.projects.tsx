import React from "react";
import GithubAPI from "../../../utils/githubApi";
import TimeAgo from "javascript-time-ago";
// @ts-ignore
import en from "javascript-time-ago/locale/en";

import { Navbar, Footer } from "../../components/index.components";
import {
  Card,
  CardActions,
  CardContent,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Link } from "react-router-dom";

import "./index.projects.css";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

export interface ProjectsProps {}

export interface ProjectsState {
  projects: any[];
  query: string;
  filter: any;
}

export class Projects extends React.Component<ProjectsProps, ProjectsState> {
  state = {
    projects: [],
    query: "",
    filter: "None",
  };

  async componentDidMount() {
    const projectsRes = await GithubAPI.getProjects();
    this.setState({ projects: projectsRes });

    document.title = "Projects | Aktindo";
  }

  render() {
    let filteredProjects: any[] = this.state.projects.filter((project: any) => {
      if (this.state.filter !== "None") {
        switch (this.state.filter) {
          case "Forked":
            return (
              project.name
                .toLowerCase()
                .includes(this.state.query.toLowerCase()) && project.fork
            );
          case "Archived":
            return (
              project.name
                .toLowerCase()
                .includes(this.state.query.toLowerCase()) && project.archived
            );
          default:
            break;
        }
      }

      return project.name
        .toLowerCase()
        .includes(this.state.query.toLowerCase());
    });

    const programmingLangIcons: any = {
      JavaScript: "javascript",
      TypeScript: "typescript",
      CSS: "css3",
      HTML: "html5",
      Java: "java",
    };

    return (
      <>
        <section className="projects my-20 mb-56 mx-5 md:mx-16 lg:mx-20">
          <p className="lg:text-4xl text-3xl text-center font-poppins mb-1">
            Here are my <span className="text-primary">Projects</span>
          </p>
          <p className="text-lg text-center">
            Click on a card to view more about it!
          </p>
          <div className="search-box flex justify-center my-5">
            <Autocomplete
              id="combo-box-demo"
              options={this.state.projects}
              getOptionLabel={(project: any) => project.name}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Project Name"
                  variant="outlined"
                  onChange={(e) => this.setState({ query: e.target.value })}
                />
              )}
              color="primary"
              className="mr-3"
            />
            <FormControl variant="outlined">
              <InputLabel id="filter">Filter</InputLabel>
              <Select
                id="filter"
                className="block"
                value={this.state.filter || "None"}
                variant="outlined"
                onChange={(event) => {
                  this.setState({ filter: event.target.value });
                  console.log(filteredProjects);
                }}
                label="filter"
              >
                <MenuItem value={"None"}>None</MenuItem>
                <MenuItem value={"Archived"}>Archived</MenuItem>
                <MenuItem value={"Forked"}>Forked</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="project-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10">
            {filteredProjects.map((project: any, index: number) => (
              <Card
                key={"project-card-" + index}
                variant="outlined"
                className="project-card rounded-box"
              >
                <CardContent>
                  <div className="project-card__title text-2xl font-poppins">
                    {this.formatWord(project.name)}{" "}
                    {project.archived && (
                      <div className="badge badge-error">
                        <i className="fas fa-archive mr-1"></i> Archived
                      </div>
                    )}
                    {project.fork && (
                      <div className="badge badge-info">
                        <i className="fas fa-code-branch mr-1"></i> Forked
                      </div>
                    )}
                  </div>
                  <p>
                    {project.description || <em>No description provided.</em>}
                  </p>
                </CardContent>
                <CardActions className="flex">
                  <div className="mini-stats">
                    <span className="mx-2 text-gray-400">
                      <i
                        className={
                          project.language
                            ? `devicon-${
                                programmingLangIcons[project.language]
                              }-plain colored mr-1`
                            : "fas fa-sticky-note mr-1"
                        }
                      ></i>
                      {project.language || "Text / Plain"}
                    </span>
                    <span className="mx-2 text-gray-400">
                      <i className="fas fa-code-branch mr-1"></i>{" "}
                      {project.forks_count}
                    </span>
                    <span className="mr-5 text-gray-400">
                      Updated{" "}
                      {timeAgo.format(new Date(project.updated_at).getTime())}
                    </span>
                  </div>
                  <div className="btns flex">
                    <Link
                      to={`/projects/p/${project.name.toLowerCase()}`}
                      className="btn btn-primary mr-1"
                    >
                      View
                    </Link>
                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target="_blank"
                        className="btn btn-success btn-square text-white"
                      >
                        <span className="material-icons-round">home</span>
                      </a>
                    )}
                  </div>
                </CardActions>
              </Card>
            ))}
          </div>
        </section>
      </>
    );
  }

  formatWord(word: string) {
    let capitalizedWords: string[] = [];

    word.split(" ").forEach((e: string) => {
      capitalizedWords.push(e[0].toUpperCase() + e.slice(1));
    });

    return capitalizedWords.join(" ").replace("-", " ").replace("_", " ");
  }
}
