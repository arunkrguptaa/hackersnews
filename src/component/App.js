import React from "react";
import "../styles.css";
import Articles from "./Articles";
import LineChart from "./LineChart";

export const App = () => {
  return (
    <div>
      <Articles />
      <LineChart />
    </div>
  );
};

export default App;
