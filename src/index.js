import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import fonts from "./fonts/main.css";
import icons from "./fonts/icons.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
