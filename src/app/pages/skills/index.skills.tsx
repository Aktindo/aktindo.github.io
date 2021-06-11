import React from "react";

export interface SkillsProps {}

export interface SkillsState {}

export interface SkillCard {
  title: string;
  titleIcon?: string;
  titleIconType?: string;
  titleIconColor?: string;
  description: string;
}

export class Skills extends React.Component<SkillsProps, SkillsState> {
  state = {};

  componentDidMount() {
    document.title = "Skills | Aktindo";
  }

  render() {
    const skillCards: SkillCard[] = [
      {
        title: "JavaScript",
        titleIcon: "javascript",
        titleIconType: "plain",
        titleIconColor: "yellow-400",
        description:
          "JavaScript is my goto language to build backend of any web app that I work on. (it does not make sense sometimes tho)",
      },
      {
        title: "TypeScript",
        titleIcon: "typescript",
        titleIconType: "plain",
        titleIconColor: "blue-500",
        description:
          "For most of the apps that involve any web framework, I tend to use TypeScript as it reduces the chance of production bugs, provides more stability, (and gives sweet intellisense.)",
      },
      {
        title: "ReactJS",
        titleIcon: "react",
        titleIconType: "original",
        titleIconColor: "blue-400",
        description:
          "ReactJS is a framework I use to build full stack (MERN) apps. It is much easier to work with in general when doing DOM manipulations.",
      },
      {
        title: "HTML",
        titleIcon: "html5",
        titleIconType: "plain",
        titleIconColor: "red-500",
        description:
          "Uh HTML, (it is not even a programming language) but I work with it all the time.",
      },
      {
        title: "Java",
        titleIcon: "java",
        titleIconType: "plain",
        titleIconColor: "red-600",
        description:
          "Whenever I work with anything machine/ai related, I use Java just because of its very clean syntax. It is a bit slow but gets the work done.",
      },
    ];

    return (
      <>
        <section>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-4xl text-3xl font-medium font-poppins title-font mb-4">
                My <span className="text-primary">Skills</span>
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                I have learnt a lot of programming languages and frameworks over
                time, and here are some which I excel in.
              </p>
            </div>
            <div className="flex flex-wrap justify-center">
              {skillCards.length &&
                skillCards.map((skillCard: SkillCard) => (
                  <div
                    className={`xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-4 rounded border-${skillCard.titleIconColor} bg-base-200 lg:mr-5 mb-5`}
                  >
                    <h2 className="text-lg sm:text-xl font-medium title-font font-poppins mb-2">
                      <i
                        className={`devicon-${skillCard.titleIcon}-${skillCard.titleIconType} colored`}
                      ></i>{" "}
                      {skillCard.title}
                    </h2>
                    <p className="leading-relaxed text-base mb-4">
                      {skillCard.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}
