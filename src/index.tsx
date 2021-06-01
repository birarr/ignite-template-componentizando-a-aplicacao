import { render } from "react-dom";
import React, { useContext } from "react";

import { App } from "./App";
import { ContextReplacementPlugin } from "webpack";

render(<App />, document.getElementById("root"));
