import React from 'react';
import Page from './Page';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Page />
      </div>
  );
}

export default App;
