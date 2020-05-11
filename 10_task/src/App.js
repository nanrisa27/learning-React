import React from 'react';
import Blogs from "./Components/Blogs/Blogs";
import NewPost from "./Components/NewPost/NewPost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import AboutMe from './Components/Aboutme/Aboutme';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/AboutMe" component={AboutMe} />
        <Route path="/newpost" component={NewPost} />
      </Switch>
    </Router>
  );
};

export default App;





