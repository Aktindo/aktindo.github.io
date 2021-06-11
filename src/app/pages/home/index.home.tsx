import React from "react";
import fetch from "node-fetch";
import GithubAPI from "../../../utils/githubApi";

//*Illustrations
import computerIllustration from "../../../assets/img/Computer-Illustration.svg";
import aktindoIllustration from "../../../assets/img/Aktindo-Illustration.svg";
import logo from "../../../assets/img/Aktindo-Logo.svg";

import "./index.home.css";

import * as dotenv from "dotenv";
dotenv.config();

export interface HomeProps {}

export interface HomeState {
  projects: any[];
  contact: {
    name?: string;
    email?: string;
    emailErrorMsg?: string;
    message?: string;
    messageSent?: boolean;
  };
}

export class Home extends React.Component<HomeProps, HomeState> {
  state = {
    projects: [],
    contact: {
      name: "",
      email: "",
      emailErrorMsg: "",
      message: "",
      messageSent: false,
    },
  };

  async componentDidMount() {
    const projectsRes = await GithubAPI.getProjects();

    this.setState({ projects: projectsRes });
    document.title = "Home | Aktindo";
  }

  render() {
    return (
      <>
        <section className="body-font">
          <div className="container hero mx-auto flex px-5 py-24 md:flex-row flex-col items-center bounce-in">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={logo}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                Hey there! <br className="hidden lg:inline-block" />
                I'm <span className="text-primary">Aktindo</span>.
              </h1>
              <p className="mb-8 leading-relaxed text-lg">
                I am a student who loves to code in his freetime. I am currently
                developing web applications, which can be helpful at certain
                times (I also code a lot of useless apps lol).
              </p>
              <div className="flex justify-center">
                <a className="btn btn-primary btn-lg" href="#explore">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="explore relative bg-base-200 p-20" id="explore">
          <div
            className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-base-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="statistics" data-aos="fade-up">
            <div className="flex flex-wrap justify-center w-full mb-5">
              <div className="text-center mb-6 lg:mb-0">
                <h1 className="md:text-5xl text-3xl font-medium title-font mb-2 font-poppins">
                  Some Statistics
                </h1>
                <div className="h-1 w-24 md:w-48 bg-primary rounded" />
              </div>
            </div>
            <div className="stats shadow flex mx-5">
              <div className="stat">
                <div className="stat-figure text-indigo-400">
                  <span className="material-icons-round">people</span>
                </div>
                <div className="stat-title">Community</div>
                <div className="stat-value text-indigo-400">40,000+</div>
                <div className="stat-desc text-green-400">
                  <span className="material-icons-round align-middle">
                    trending_up
                  </span>{" "}
                  1.5% more in the last 30 days
                </div>
              </div>
              <div className="stat">
                <div className="stat-figure text-yellow-400">
                  <span className="material-icons-round">biotech</span>
                </div>
                <div className="stat-title">Projects</div>
                <div className="stat-value text-yellow-400">
                  {
                    this.state.projects.filter((project: any) => !project.fork)
                      .length
                  }
                  +
                </div>
                <div className="stat-actions">
                  <a className="btn btn-sm btn-primary" href="/projects">
                    View all projects
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="whatDoIWorkOn" className="my-7" data-aos="fade-right">
            <section className="body-font">
              <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                  <img
                    className="object-cover object-center rounded shadow"
                    alt="hero"
                    src={computerIllustration}
                  />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium font-poppins">
                    What do I <span className="text-primary">work</span> on?
                  </h1>
                  <p className="mb-8 leading-relaxed">
                    I work on a lot of random apps (to practice stuff or... for
                    fun). It can be using ReactJS to make a full stack app, or
                    even a simple JavaScript project. I also occasionally write
                    AI bots with Java. My main focus is always on apps that
                    could make the world{" "}
                    <span className="line-through">regret modern era</span>{" "}
                    better.
                  </p>
                  <div className="flex justify-center">
                    <a href="/projects" className="btn btn-lg btn-primary">
                      View All Projects
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div id="whatGotMeCoding" className="my-7" data-aos="fade-left">
            <section className="body-font">
              <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                  <img
                    className="object-cover object-center rounded shadow"
                    alt="hero"
                    src={aktindoIllustration}
                  />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium font-poppins">
                    What got me <span className="text-primary">coding</span>?
                  </h1>
                  <p className="mb-8 leading-relaxed">
                    I would like to thank my best friend,{" "}
                    <a
                      className="link link-primary link-hover"
                      href="https://twitter.com/glidegame"
                    >
                      @Game Glide
                    </a>{" "}
                    who got me into coding things. I would not be here without
                    him. (He is a very cool guy, do check his stuff out)
                  </p>
                  <div className="flex justify-center">
                    <a href="/skills" className="btn btn-lg btn-primary">
                      View my skills
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div id="getInTouch" data-aos="zoom-in">
            <section className="body-font relative">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                  <h1 className="sm:text-5xl text-3xl font-medium title-font mb-4 font-poppins">
                    Get In <span className="text-primary">Touch</span>
                  </h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Have any queries? Feel free to leave me a message below and
                    I will get in touch with you!
                  </p>
                </div>

                <div className="contact-messages">
                  {this.state.contact.messageSent && (
                    <div className="alert alert-success flex justify-center">
                      <div className="flex-1">
                        <i className="fas fa-check fa-lg mx-2 mt-1"></i>
                        <label>
                          Your message has been sent! I will get back to you as
                          soon as possible.
                        </label>
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                  <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2 form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Wumpus"
                        className="input input-primary input-bordered"
                        onChange={(e) =>
                          this.setState({
                            contact: {
                              name: e.target.value,
                              email: this.state.contact.email,
                              message: this.state.contact.message,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="p-2 w-1/2 form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Wumpus@123"
                        className="input input-primary input-bordered"
                        onChange={(e) =>
                          this.setState({
                            contact: {
                              name: this.state.contact.name,
                              email: e.target.value,
                              message: this.state.contact.message,
                            },
                          })
                        }
                      />
                      <label className="label">
                        <span className="label-text-alt text-error">
                          {this.state.contact.emailErrorMsg}
                        </span>
                      </label>
                    </div>
                    <div className="p-2 w-full form-control">
                      <label className="label">
                        <span className="label-text">Message</span>
                      </label>
                      <textarea
                        className="textarea h-24 textarea-bordered textarea-primary"
                        placeholder="Start writing..."
                        onChange={(e) =>
                          this.setState({
                            contact: {
                              name: this.state.contact.name,
                              email: this.state.contact.email,
                              message: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="p-2 w-full flex justify-center">
                      <button
                        className="btn btn-primary btn-wide"
                        onClick={() => this.handleContact()}
                        disabled={
                          this.state.contact.name === "" ||
                          this.state.contact.email === "" ||
                          this.state.contact.message === ""
                        }
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </>
    );
  }

  handleContact() {
    const { name, email, message } = this.state.contact;

    if (email.split("@").length === 1) {
      this.setState({
        contact: { emailErrorMsg: "Please provide a valid email address." },
      });

      return;
    }

    fetch(process.env.REACT_APP_WEBHOOK_URI || "", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: "💬 New message from https://aktindo.me/",
        embeds: [
          {
            author: {
              name: `Email - ${email}`,
            },
            title: `Author's Name - ${name}`,
            fields: [
              {
                name: "Message",
                value: message,
                inline: false,
              },
            ],
            color: 7506394,
            footer: {
              name: `Sent on ${new Date().getDay()}/${new Date().toLocaleDateString(
                "default",
                { month: "long" }
              )}/${new Date().getFullYear()} - ${new Date().getTime()}`,
            },
          },
        ],
      }),
    });

    this.setState({
      contact: { messageSent: true },
    });
    setTimeout(() => {
      this.setState({ contact: { messageSent: false } });
    }, 10000);
  }
}
