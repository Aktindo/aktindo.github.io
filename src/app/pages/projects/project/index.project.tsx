import React, { useEffect, useState } from "react";
import illustrationOne from "../../../../assets/img/404-Illustration.svg";
import githubApi from "../../../../utils/githubApi";

import { CircularProgress, Avatar, Tooltip, Divider } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { Navbar, Footer } from "../../../components/index.components";
import { useParams } from "react-router";

export interface ProjectProps {}

export const Project: React.FC<ProjectProps> = () => {
  const { name }: any = useParams();
  const [validProject, setValidProject] = useState([{}]);
  const [project, setProject] = useState({} as any);
  const [projectStargazers, setProjectStargazers] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    githubApi
      .getProjects()
      .then((projects: any[]) => {
        setValidProject(
          projects.filter(
            (project: any) => project.name.toLowerCase() === name.toLowerCase()
          )
        );
      })
      .then(() => {
        if (validProject.length) {
          githubApi.getProject(name).then((project: any) =>
            githubApi
              .getProjectStargazers(name)
              .then((projectStargazers: any) => {
                setProject(project);
                setProjectStargazers(projectStargazers);
                setLoading(false);

                document.title = "Project Info | Aktindo";
              })
          );
        }
      });
  }, []);

  if (validProject.length) {
    return (
      <section>
        <div className="project mx-10 my-10 bounce-in">
          <div className="card shadow bg-base-200">
            {loading && (
              <div className="card-body grid justify-center">
                <CircularProgress className="flex justify-center" />
              </div>
            )}
            {!loading && (
              <div className="card-body">
                <h2 className="card-title font-normal font-poppins text-3xl">
                  <span className="font-bold">{project.owner.login}</span> /{" "}
                  {project.name}
                  {project.archived && (
                    <div className="badge mx-2 badge-error">
                      <i className="fas fa-archive mr-1"></i> Archived
                    </div>
                  )}
                  {project.fork && (
                    <div className="badge mx-2 badge-info">
                      <i className="fas fa-code-branch mr-1"></i> Forked
                    </div>
                  )}
                </h2>
                {project.homepage && (
                  <div className="url text-base mb-5">
                    <i className="fas fa-link mr-1"></i>
                    <a
                      href={project.homepage}
                      className="link link-primary link-hover"
                      target="_blank"
                    >
                      {project.homepage}
                    </a>
                  </div>
                )}
                <div className="description mb-5 text-base">
                  <p>{project.description}</p>
                </div>
                <Divider />
                <div className="topics my-5">
                  <p className="text-2xl font-poppins">Topics</p>
                  {project.topics.length
                    ? project.topics.map((topic: string, index: number) => (
                        <div key={index} className="badge mr-1 badge-info mt-1">
                          {topic}
                        </div>
                      ))
                    : "No topics to show right now."}
                </div>
                <div className="source-code my-5">
                  <p className="text-2xl font-poppins">Source Code</p>

                  <div className="overflow-x-auto">
                    <table className="table w-56">
                      <thead className="font-poppins">
                        <tr>
                          <th>Repository</th>
                          <th>License</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a
                              href={`https://github.com/aktindo/${project.name}`}
                              className="link link-primary link-hover "
                            >
                              {project.name}
                            </a>
                          </td>
                          <td>
                            <i className="fas fa-balance-scale"></i>{" "}
                            {(project.license && project.license.name) ||
                              "None"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="stargazers mb-5">
                  <p className="text-2xl font-poppins">Stargazers</p>
                  <div className="stargazers-stats flex">
                    <div className="badge badge-warning">
                      <i className="fas fa-star mr-1"></i>{" "}
                      {project.stargazers_count}
                    </div>
                    <AvatarGroup max={6}>
                      {projectStargazers.length &&
                        projectStargazers.map((projectStargazer: any) => (
                          <Tooltip
                            title={projectStargazer.login}
                            placement="top"
                            arrow
                          >
                            <Avatar
                              alt={projectStargazer.login}
                              src={projectStargazer.avatar_url}
                            />
                          </Tooltip>
                        ))}
                    </AvatarGroup>
                  </div>
                </div>
                <div className="source-code"></div>
                <div className="card-actions flex">
                  <div className="owner mr-5">
                    <div className="avatar">
                      <div className="rounded-full w-12 h-12 ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={project.owner.avatar_url} />
                      </div>
                    </div>
                  </div>
                  <Divider orientation="vertical" flexItem />
                  <div className="project-stats ml-5">
                    <span className="forks text-lg mr-3">
                      <i className="fas fa-code-branch"></i>{" "}
                      {project.forks_count}
                    </span>
                    <span className="watchers text-lg mr-3">
                      <i className="fas fa-eye"></i> {project.watchers_count}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <>
        <section className="body-font my-16">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src={illustrationOne}
            />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
                Okay, this is <span className="text-primary">weird</span>
              </h1>
              <p className="mb-8 leading-relaxed text-gray-400">
                We could not find the project - {name} in our systems. Maybe we
                should go back?
              </p>
              <div className="flex justify-center">
                <a href="/" className="inline-flex btn btn-primary">
                  go home
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};
