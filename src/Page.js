import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export const data = [
  {
    title: "As the Old Sing, So Pipe the Young",
    artist: "Jan Steen, 1668-1670",
    model: "Astronaut"
  },
  {
    title: "The Goldfinch",
    artist: "Carel Fabritius, 1654",
    model: "Astronaut"
  },
  {
    title: "Smiling Girl, a Courtesan, Holding an Obscene Image",
    artist: "Gerrit van Honthorst, 1625",
    model: "Astronaut"
  }
];

function Toolbar() {
  var { pageId } = useParams();
  pageId = parseInt(pageId);
  return (
    <div className="toolbar d-flex flex-row justify-content-between w-100 px-3 align-items-center">
      <Link to={`/vi/${pageId-1}`} role="button" className={`btn btn-primary btn-round${pageId === 1 ? " invisible" : ""}`}><i class="fas fa-arrow-left"></i></Link>
      <Link to={`/vi/${pageId+1}`} role="button" className={`btn btn-primary btn-round${pageId === data.length ? " invisible" : ""}`}><i class="fas fa-arrow-right"></i></Link>
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
    <div className="container d-flex flex-row justify-content-center align-items-center init-page">
      <a href="/vi/1" role="button" className="btn btn-light btn-lg"><i class="fas fa-eye"></i></a>
    </div>
  );
}

function Page() {
  return (
    <Router>
      <div className="h-100 w-100">
        <Switch>
          <Route exact path="/vi/">
            <Start />
          </Route>
          <Route path="/vi/:pageId">
            <Header />
            <model-viewer class="w-100 flex-grow-1 model-viewer" src={`${process.env.PUBLIC_URL}/assets/models/Astronaut.glb`} ar ar-scale="auto" camera-controls alt="A 3D model of an astronaut" ios-src={`${process.env.PUBLIC_URL}/assets/models/Astronaut.usdz`} magic-leap unstable-webxr></model-viewer>
            <Toolbar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Page;