import React from 'react';

function Toolbar() {
  return (
    <div className="toolbar d-flex flex-row justify-content-between w-100 px-3 align-items-center">
      <a href="#" role="button" className="btn btn-primary btn-round disabled"><i class="fas fa-arrow-left"></i></a>
      <a href="#" role="button" className="btn btn-primary btn-round"><i class="fas fa-arrow-right"></i></a>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>As the Old Sing, So Pipe the Young</h1>
    </div>
  );
}

function Page() {
  return (
    <div className="h-100 w-100 d-flex flex-column">
      <Header />
      <model-viewer class="w-100 flex-grow-1 model-viewer" src={`${process.env.PUBLIC_URL}/assets/models/Astronaut.glb`} ar ar-scale="auto" camera-controls alt="A 3D model of an astronaut" ios-src={`${process.env.PUBLIC_URL}/assets/models/Astronaut.usdz`} magic-leap unstable-webxr></model-viewer>
      <Toolbar />
    </div>
  );
}

export default Page;