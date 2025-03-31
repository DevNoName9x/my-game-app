import React from "react";
import Header from "./components/Header";
import CardCollection from "./components/CardCollection";
import "bootstrap/dist/css/bootstrap.min.css";
import { Analytics } from "@vercel/analytics/remix";
function App() {
  return (
    <div className="App">
      <Analytics />
      <Header />
      <CardCollection />
    </div>
  );
}

export default App;
