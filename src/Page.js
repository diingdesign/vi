import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import data from './Data';

function Toolbar() {
  var { pageId } = useParams();
  pageId = parseInt(pageId);
  return (
    <div className="toolbar d-flex flex-row justify-content-between w-100 px-3 align-items-center">
      <Link to={`${pageId-1}`} role="button" className={`btn btn-primary btn-round${pageId === 1 ? " invisible" : ""}`}><i className="fas fa-arrow-left"></i></Link>
      <Link to={`${pageId+1}`} role="button" className={`btn btn-primary btn-round${pageId === data.length ? " invisible" : ""}`}><i className="fas fa-arrow-right"></i></Link>
    </div>
  );
}

function Header() {
  let { pageId } = useParams();
  return (
    <div className="header px-3 py-2">
      <h1>{data[pageId - 1].title}</h1>
      <p className="artist-label">{data[pageId - 1].artist}</p>
    </div>
  );
}

function Start() {
  return (
    <div className="container d-flex flex-row justify-content-center align-items-center h-100">
      <Link to="1" role="button" className="btn btn-light btn-lg"><i class="fas fa-eye"></i></Link>
    </div>
  );
}

function EntityViewer() {
  var { pageId } = useParams();
  pageId = parseInt(pageId);
  return (
    <model-viewer class="w-100 flex-grow-1 model-viewer" src={`${process.env.PUBLIC_URL}/assets/models/${data[pageId-1].model}.glb`} ar ar-scale="auto" camera-controls alt={data[pageId-1].title} ios-src={`${process.env.PUBLIC_URL}/assets/models/${data[pageId-1].model}.usdz`} magic-leap unstable-webxr></model-viewer>
  );
}

function Page() {
  return (
    <Router>
      <div className="h-100 w-100 d-flex flex-column">
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/:pageId">
            <Header />
            <EntityViewer />
            <Toolbar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Page;