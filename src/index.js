import React from "react";
import ReactDOM from "react-dom";

import useInput from './customHook/nameStatus'
import useFetch from './customHook/callUrl'

function App() {
  const name = useInput("");
  const { payload, loading, error } = useFetch("https://aws.random.cat/meow")

  return (
    <div className="App">
      <h1>Use Hooks</h1>
      <br />
      <input {...name} placeholder="Whats your name" />
      <br />
      {loading && <span>loading your cat</span>}
      {!loading && error && <span>{error}</span>}
      {!loading && payload && <img src={payload.file} width="250" />}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
