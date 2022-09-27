//css
import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const pageSize = 5;
  //const apiKey="6b4fc6e736aa4226845b529d1c2887cf"

  const [progress, setProgress] = useState(0);
  // setProgress = (progress) =>{
  //  setProgress(progress)
  // }

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11346" progress={progress} />
        <Switch>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              apiKey="6b4fc6e736aa4226845b529d1c2887cf"
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <News
              setProgress={setProgress}
              apiKey="6b4fc6e736aa4226845b529d1c2887cf"
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              apiKey="6b4fc6e736aa4226845b529d1c2887cf"
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/general">
            <News
              setProgress={setProgress}
              apiKey="6b4fc6e736aa4226845b529d1c2887cf"
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress}
              apiKey="6b4fc6e736aa4226845b529d1c2887cf"
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              setProgress={setProgress}
              apiKey="6b4fc6e736aa4226845b529d1c2887cf"
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              apiKey="6b4fc6e736aa4226845b529d1c2887cf"
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              apiKey="6b4fc6e736aa4226845b529d1c2887cf"
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
