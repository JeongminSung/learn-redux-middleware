import React from "react";
// import CounterContainer from "./containers/CounterContainer";
import { Route } from "react-router-dom";
import PostListPage from "./pages/PostListPage";
import PostByIdPage from "./pages/PostByIdPage";

function App() {
  return (
    <>
      <Route path="/" component={PostListPage} exact={true} />
      <Route path="/:id" component={PostByIdPage} exact={true} />
    </>
  );
}

export default App;
