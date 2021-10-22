import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import List from './Components/Posts/List';
import './App.css';
import Navbar from './Components/UI/Navbar';
import Create from './Components/Posts/CreatePost/Create';
import DetailedPost from './Components/Posts/DetailedPost';
import Footer from './Components/UI/Footer';
import PostState from './Context/PostState';
import EditPost from './Components/Posts/EditPost/EditPost';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <PostState>
          <Switch>
            <Route exact path="/" component={List} />
            <Route exact path="/create/" component={Create} />
            <Route exact path="/:id/" component={DetailedPost} />
            <Route exact path="/:id/edit/" component={EditPost} />
          </Switch>
        </PostState>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
