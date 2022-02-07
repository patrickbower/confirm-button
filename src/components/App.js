import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Rail from "./Rail";
import Video from "./Video";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Switch>
          <Route path="/video">
            <Video />
            <Rail title={"Biggest Summer Moves"} />
            <Rail title={"Soccer Documentaries"} />
            <Rail title={"Premier League: Returns August 13"} />
          </Route>
          <Route path="/">
            <Rail title={"What's On"} />
            <Rail title={"Don't Miss"} meta={false} extend={true} />
            <Rail title={"NFL Game Pass"} />
            <Rail title={"The Home of Boxing"} />
            <Rail title={"MLS"} />
            <Rail title={"Recently Added"} />
            <Rail title={"WTA Tour"} />
            <Rail title={"Biggest Summer Moves"} />={" "}
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
