import React from "react";
import illustrationOne from "../../../assets/img/404-Illustration.svg";

import { Footer } from "../../components/index.components";

export class FourZeroFour extends React.Component {
  state = {};

  componentDidMount() {
    document.title = "404 | Aktindo";
  }

  render() {
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
                You landed on a page which does not exist. We need to get out of
                here right now.
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
}
