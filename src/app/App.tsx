import React from "react";
import AOS from "aos";

import "aos/dist/aos.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LinearProgress } from "@material-ui/core";
import { Footer, Navbar } from "./components/index.components";

//* Pages
import {
  Home,
  Projects,
  Project,
  FourZeroFour,
  Skills,
} from "./pages/index.pages";

import "./App.css";

export interface AppProps {}

export interface AppState {
  loading: boolean;
}

class App extends React.Component<AppProps, AppState> {
  state = {
    loading: true,
    blogs: [],
  };

  componentDidMount() {
    this.wait(2000);
    AOS.init({ once: true, duration: 1500 });
  }

  sleep = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false,
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          {this.state.loading && <LinearProgress className="mt-0" />}
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/projects/" component={Projects} exact />
            <Route path="/projects/p/:name">
              <Project />
            </Route>
            <Route path="/skills" component={Skills} />

            <Route
              path="/discord"
              component={() => {
                window.location.href = "https://discord.gg/6g297Usrsn";

                return null;
              }}
            />

            <Route path="*" component={FourZeroFour} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
