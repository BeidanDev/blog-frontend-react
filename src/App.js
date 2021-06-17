import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { Header } from './components/Header';
import { PostsList } from './components/PostsList';
import { PostsNew } from './components/PostsNew';
import { PostsUpdate } from './components/PostsUpdate';
import { PostsDetail } from './components/PostsDetail';

export const App = () => {
  return (
    <Router>
      <Provider store={ store }>
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={ PostsList } />
            <Route exact path="/posts/:id" component={ PostsDetail }  />
            <Route exact path="/create-posts" component={ PostsNew } />
            <Route exact path="/update-posts/:id" component={ PostsUpdate } />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}
